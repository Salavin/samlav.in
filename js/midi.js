let midiIn = $("#midiIn");
let inputData = $(".inputData");
let curInput;
let input;
let activesensingcheck = $("#activesensingcheck");
let channelaftertouchcheck = $("#channelaftertouchcheck");
let channelmodecheck = $("#channelmodecheck");
let clockcheck = $("#clockcheck");
let continuecheck = $("#continuecheck");
let controlchangecheck = $("#controlchangecheck");
let keyaftertouchcheck = $("#keyaftertouchcheck");
let noteoffcheck = $("#noteoffcheck");
let noteoncheck = $("#noteoncheck");
let nrpncheck = $("#nrpncheck");
let pitchbendcheck = $("#pitchbendcheck");
let programchangecheck = $("#programchangecheck");
let resetcheck = $("#resetcheck");
let songpositioncheck = $("#songpositioncheck");
let songselectcheck = $("#songselectcheck");
let startcheck = $("#startcheck");
let stopcheck =$("#stopcheck");
let sysexcheck = $("#sysexcheck");
let timecodecheck = $("#timecodecheck");
let tuningrequrestcheck = $("#tuningrequestcheck");
let unknownsystemmessagecheck = $("#unknownsystemmessagecheck");

WebMidi.enable(function (err)
{
    if (err)
    {
        console.log("WebMidi not enabled.") //TODO: Redirect users
    }
    else
    {
        console.log("WebMidi enabled!");
        updateList();
    }

    WebMidi.addListener("connected", function()
    {
        updateList()
    });
    WebMidi.addListener("disconnected", function ()
    {
        updateList()
    });

    function updateList()
    {
        if (WebMidi.inputs.length > 0)
        {
            midiIn.html(WebMidi.inputs.map(input => `<option value="${input.id}">${input.name}</option>`).join(''));
            curInput = midiIn.val();
            input = WebMidi.getInputById(curInput);
            inputData.show();
            addListeners();
        }
        else
        {
            midiIn.html("<option value='0'>No inputs detected!</option>");
            input.removeListener();
            curInput = 0;
            inputData.hide();
        }
    }

    midiIn.change(function()
    {
        addListeners();
    });

    function addListeners()
    {
        input.removeListener();
        curInput = midiIn.val();
        input = WebMidi.getInputById(curInput);

        input.addListener("activesensing", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("channelaftertouch", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("channelmode", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("clock", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("continue", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("controlchange", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("keyaftertouch", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("noteoff", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("noteon", "all", function(e)
        {
            console.log("Note!");
            onEvent(e);
        });

        input.addListener("nrpn", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("pitchbend", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("programchange", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("reset", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("songposition", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("songselect", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("start", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("stop", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("sysex", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("timecode", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("tuningrequest", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("channelaftertouch", "all", function(e)
        {
            onEvent(e);
        });

        input.addListener("unknownsystemmessage", "all", function(e)
        {
            onEvent(e);
        });

    }

    function onEvent(e)
    {
        let html;
        switch (e.type)
        {
            case "activesensing":
                if (activesensingcheck.is(":checked"))
                {
                    html = '<tr class="activesensing"><td><code>' + Math.round(e.timestamp).toString() + '</code></td><td><code>' + e.data + '</code></td><td>Active Sensing</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="activesensing" style="display: none"><td><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Active Sensing</td><td><em>None</em></td>';
                }
                break;
            case "channelaftertouch":
                if (channelaftertouchcheck.val === true)
                {
                    html = '<td class="channelaftertouch"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Channel Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 1): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="channelaftertouch" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Channel Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 1): ' + e.value + '</li></ul></td>';
                }
                break;
            case "channelmode":
                if (channelmodecheck.val === true)
                {
                    html = '<td class="channelmode"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Channel Mode</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="channelmode" style="display: none"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Channel Mode</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                break;
            case "clock":
                if (clockcheck.val === true)
                {
                    html = '<td class="clock"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Clock</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="clock" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Clock</td><td><em>None</em></td>';
                }
                break;
            case "continue":
                if (continuecheck.val === true)
                {
                    html = '<td class="continue"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Continue</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="continue" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Continue</td><td><em>None</em></td>';
                }
                break;
            case "controlchange":
                if (controlchangecheck.val === true)
                {
                    html = '<td class="controlchange"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Control Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="controlchange" style="display: none"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Control Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                break;
            case "keyaftertouch":
                if (keyaftertouchcheck.val === true)
                {
                    html = '<td class="keyaftertouch"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Key Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Value (0 to 1): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="keyaftertouch" style="display: none"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Key Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Value (0 to 1): ' + e.value + '</li></ul></td>';
                }
                break;
            case "noteoff":
                if (noteoffcheck.val === true)
                {
                    html = '<td class="noteoff"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Note Off</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 1): ' + e.value + '</li><li>Raw Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="noteoff" style="display: none"><code' + e.timestamp + '</code></td><td><code' + e.data+ '</code></td><td>Note Off</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 1): ' + e.value + '</li><li>Raw Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td>';
                }
                break;
            case "noteon":
                if (noteoncheck.val === true)
                {
                    html = '<td class="noteon"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>Note On</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 1): ' + e.value + '</li><li>Raw Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="noteon" style="display: none"><code' + e.timestamp + '</code></td><td><code' + e.data+ '</code></td><td>Note On</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 1): ' + e.value + '</li><li>Raw Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td>';
                }
                break;
            case "nrpn":
                if (nrpncheck.val === true)
                {
                    html = '<td class="nrpn"><code' + e.timestamp + '</code></td><td><code' + e.data + '</code></td><td>NRPN</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 65535): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="nrpn" style="display: none"><code' + e.timestamp+ '</code></td><td><code' + e.data+ '</code></td><td>NRPN</td><td><ul><li>Channel: '+ e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name+ '</li></ul></li><li>Value (0 to 65535): ' + e.value + '</li></ul></td>';
                }
                break;
            case "pitchbend":
                if (pitchbendcheck.val === true)
                {
                    html = '<td class="pitchbend"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Pitch Bend</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (-1 to 1): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="pitchbend" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Pitch Bend</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (-1 to 1): ' + e.value + '</li></ul></td>';
                }
                break;
            case "programchange":
                if (programchangecheck.val === true)
                {
                    html = '<td class="programchange"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Program Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="programchange" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Program Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 127): ' + e.value + '</li></ul></td>';
                }
                break;
            case "reset":
                if (resetcheck.val === true)
                {
                    html = '<td class="reset"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Reset</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="reset" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Reset</td><td><em>None</em></td>';
                }
                break;
            case "songposition":
                if (songpositioncheck.val === true)
                {
                    html = '<td class="songposition"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Song Position</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="songposition" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Song Position</td><td><em>None</em></td>';
                }
                break;
            case "songselect":
                if (songselectcheck.val === true)
                {
                    html = '<td class="songselect"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Song Select</td><td><ul><li>Song: ' + e.song + '</li></ul></td>';
                }
                else
                {
                    html = '<td class="songselect" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Song Select</td><td><ul><li>Song: ' + e.song + '</li></ul></td>';
                }
                break;
            case "start":
                if (startcheck.val === true)
                {
                    html = '<td class="start"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Start</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="start" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Start</td><td><em>None</em></td>';
                }
                break;
            case "stop":
                if (stopcheck.val === true)
                {
                    html = '<td class="stop"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Stop</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="stop" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Stop</td><td><em>None</em></td>';
                }
                break;
            case "sysex":
                if (sysexcheck.val === true)
                {
                    html = '<td class="sysex"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>System Exclusive Message</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="sysex" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>System Exclusive Message</td><td><em>None</em></td>';
                }
                break;
            case "timecode":
                if (timecodecheck.val === true)
                {
                    html = '<td class="timecode"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Timecode</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="timecode" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Timecode</td><td><em>None</em></td>';
                }
                break;
            case "tuningrequest":
                if (tuningrequrestcheck.val === true)
                {
                    html = '<td class="tuningrequest"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Tuning Request</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="tuningrequest" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Tuning Request</td><td><em>None</em></td>';
                }
                break;
            case "unknownsystemmessage":
                if (unknownsystemmessagecheck.val === true)
                {
                    html = '<td class="unknownsystemmessage"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Unknown System Message</td><td><em>None</em></td>';
                }
                else
                {
                    html = '<td class="unknownsystemmessage" style="display: none"><code>' + e.timestamp + '</code></td><td><code>' + e.data + '</code></td><td>Unknown System Message</td><td><em>None</em></td>';
                }
                break;
        }
        $('#table > tbody > tr').eq(0).after(html);
        // $('#table').append('<tr>' + html + '</tr>');
    }
}, true);

let checkboxes = $(".filters");

$("#allon").click(function ()
{
    checkboxes.prop("checked", true);
})
$("#alloff").click(function ()
{
    checkboxes.prop("checked", false);
})

activesensingcheck.click(function ()
{
    if (activesensingcheck.val() === true)
    {
        $(".activesensing").show();
    }
    else
    {
        $(".activesensing").hide();
    }
});

channelaftertouchcheck.click(function ()
{
    if (channelaftertouchcheck.val() === true)
    {
        $(".chanelaftertouch").show();
    }
    else
    {
        $(".channelaftertouch").hide();
    }
});

channelmodecheck.click(function ()
{
    if (channelmodecheck.val() === true)
    {
        $(".channelmode").show();
    }
    else
    {
        $(".channelmode").hide();
    }
});

clockcheck.click(function ()
{
    if (clockcheck.val() === true)
    {
        $(".clock").show();
    }
    else
    {
        $(".clock").hide();
    }
});

continuecheck.click(function ()
{
    if (continuecheck.val() === true)
    {
        $(".continue").show();
    }
    else
    {
        $(".continue").hide();
    }
});

controlchangecheck.click(function ()
{
    if (controlchangecheck.val() === true)
    {
        $(".controlchange").show();
    }
    else
    {
        $(".controlchange").hide();
    }
});

keyaftertouchcheck.click(function ()
{
    if (keyaftertouchcheck.val() === true)
    {
        $(".keyaftertouch").show();
    }
    else
    {
        $(".keyaftertouch").hide();
    }
});

noteoffcheck.click(function ()
{
    if (noteoffcheck.val() === true)
    {
        $(".noteoff").show();
    }
    else
    {
        $(".noteoff").hide();
    }
});

noteoncheck.click(function ()
{
    if (noteoncheck.val() === true)
    {
        $(".noteon").show();
    }
    else
    {
        $(".noteon").hide();
    }
});

nrpncheck.click(function ()
{
    if (nrpncheck.val() === true)
    {
        $(".nrpn").show();
    }
    else
    {
        $(".nrpn").hide();
    }
});

pitchbendcheck.click(function ()
{
    if (pitchbendcheck.val() === true)
    {
        $(".pitchbend").show();
    }
    else
    {
        $(".pitchbend").hide();
    }
});

programchangecheck.click(function ()
{
    if (programchangecheck.val() === true)
    {
        $(".programchange").show();
    }
    else
    {
        $(".programchange").hide();
    }
});

resetcheck.click(function ()
{
    if (resetcheck.val() === true)
    {
        $(".reset").show();
    }
    else
    {
        $(".reset").hide();
    }
});

songpositioncheck.click(function ()
{
    if (songpositioncheck.val() === true)
    {
        $(".songposition").show();
    }
    else
    {
        $(".songposition").hide();
    }
});

songselectcheck.click(function ()
{
    if (songselectcheck.val() === true)
    {
        $(".songselect").show();
    }
    else
    {
        $(".songselect").hide();
    }
});

startcheck.click(function ()
{
    if (startcheck.val() === true)
    {
        $(".start").show();
    }
    else
    {
        $(".start").hide();
    }
});

stopcheck.click(function ()
{
    if (stopcheck.val() === true)
    {
        $(".stop").show();
    }
    else
    {
        $(".stop").hide();
    }
});

sysexcheck.click(function ()
{
    if (sysexcheck.val() === true)
    {
        $(".sysex").show();
    }
    else
    {
        $(".sysex").hide();
    }
});

timecodecheck.click(function ()
{
    if (timecodecheck.val() === true)
    {
        $(".timecode").show();
    }
    else
    {
        $(".timecode").hide();
    }
});

tuningrequrestcheck.click(function ()
{
    if (tuningrequrestcheck.val() === true)
    {
        $(".tuningrequest").show();
    }
    else
    {
        $(".tuningrequest").hide();
    }
});

unknownsystemmessagecheck.click(function ()
{
    if (unknownsystemmessagecheck.val() === true)
    {
        $(".unknownsystemmessage").show();
    }
    else
    {
        $(".unknownsystemmessage").hide();
    }
});
