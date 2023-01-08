let midiIn = $("#midiIn");
let inputData = $(".inputData");
let purgeNum = $("#purgeNum");
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
let purgeAmt = 256;
let table = $("#table");

WebMidi.enable(function (err)
{
    if (err)
    {
        console.log("WebMidi not enabled.") //TODO: Redirect users
        midiIn.html("<option value='0'>WebMidi not enabled.</option>");
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
            if (input != undefined)
            {
                input.removeListener();
            }
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
        let bytes = '';
        e.data.forEach((element) =>
        {
            bytes += element.toString(16).toUpperCase();
        });
        let data = '<ul><li>Dec: ' + e.data + '</li><li>' + 'Hex: <code>' + bytes + '</code></li></ul>';
        switch (e.type)
        {
            case "activesensing":
                if (activesensingcheck.is(":checked"))
                {
                    html = '<tr class="activesensing"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Active Sensing</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="activesensing" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Active Sensing</td><td><em>None</em></td></tr>';
                }
                break;
            case "channelaftertouch":
                if (channelaftertouchcheck.is(":checked"))
                {
                    html = '<tr class="channelaftertouch"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Channel Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="channelaftertouch" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Channel Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "channelmode":
                if (channelmodecheck.is(":checked"))
                {
                    html = '<tr class="channelmode"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Channel Mode</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="channelmode" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Channel Mode</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "clock":
                if (clockcheck.is(":checked"))
                {
                    html = '<tr class="clock"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Clock</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="clock" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Clock</td><td><em>None</em></td></tr>';
                }
                break;
            case "continue":
                if (continuecheck.is(":checked"))
                {
                    html = '<tr class="continue"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Continue</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="continue" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Continue</td><td><em>None</em></td></tr>';
                }
                break;
            case "controlchange":
                if (controlchangecheck.is(":checked"))
                {
                    html = '<tr class="controlchange"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Control Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="controlchange" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Control Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "keyaftertouch":
                if (keyaftertouchcheck.is(":checked"))
                {
                    html = '<tr class="keyaftertouch"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Key Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Value (0 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="keyaftertouch" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Key Aftertouch</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Value (0 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "noteoff":
                if (noteoffcheck.is(":checked"))
                {
                    html = '<tr class="noteoff"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Note Off</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="noteoff" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td><code>' + data+ '</code></td><td>Note Off</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td></tr>';
                }
                break;
            case "noteon":
                if (noteoncheck.is(":checked"))
                {
                    html = '<tr class="noteon"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Note On</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="noteon" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td><code>' + data+ '</code></td><td>Note On</td><td><ul><li>Channel: ' + e.channel + '</li><li>Note:<ul><li>Number: ' + e.note.number + '</li><li>Name: ' + e.note.name + '</li><li>Octave (-2 to 8): ' + e.note.octave + '</li></ul></li><li>Velocity (0 to 127): ' + e.rawVelocity + '</li></ul></td></tr>';
                }
                break;
            case "nrpn":
                if (nrpncheck.is(":checked"))
                {
                    html = '<tr class="nrpn"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>NRPN</td><td><ul><li>Channel: ' + e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name + '</li></ul></li><li>Value (0 to 65535): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="nrpn" style="display: none"><td><code>' + e.timestamp+ '</code></td><td><code>' + data+ '</code></td><td>NRPN</td><td><ul><li>Channel: '+ e.channel + '</li><li>Controller:<ul><li>Number: ' + e.controller.number + '</li><li>Name: ' + e.controller.name+ '</li></ul></li><li>Value (0 to 65535): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "pitchbend":
                if (pitchbendcheck.is(":checked"))
                {
                    html = '<tr class="pitchbend"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Pitch Bend</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (-1 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="pitchbend" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Pitch Bend</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (-1 to 1): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "programchange":
                if (programchangecheck.is(":checked"))
                {
                    html = '<tr class="programchange"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Program Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="programchange" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Program Change</td><td><ul><li>Channel: ' + e.channel + '</li><li>Value (0 to 127): ' + e.value + '</li></ul></td></tr>';
                }
                break;
            case "reset":
                if (resetcheck.is(":checked"))
                {
                    html = '<tr class="reset"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Reset</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="reset" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Reset</td><td><em>None</em></td></tr>';
                }
                break;
            case "songposition":
                if (songpositioncheck.is(":checked"))
                {
                    html = '<tr class="songposition"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Song Position</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="songposition" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Song Position</td><td><em>None</em></td></tr>';
                }
                break;
            case "songselect":
                if (songselectcheck.is(":checked"))
                {
                    html = '<tr class="songselect"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Song Select</td><td><ul><li>Song: ' + e.song + '</li></ul></td></tr>';
                }
                else
                {
                    html = '<tr class="songselect" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Song Select</td><td><ul><li>Song: ' + e.song + '</li></ul></td></tr>';
                }
                break;
            case "start":
                if (startcheck.is(":checked"))
                {
                    html = '<tr class="start"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Start</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="start" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Start</td><td><em>None</em></td></tr>';
                }
                break;
            case "stop":
                if (stopcheck.is(":checked"))
                {
                    html = '<tr class="stop"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Stop</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="stop" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Stop</td><td><em>None</em></td></tr>';
                }
                break;
            case "sysex":
                if (sysexcheck.is(":checked"))
                {
                    html = '<tr class="sysex"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>System Exclusive Message</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="sysex" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>System Exclusive Message</td><td><em>None</em></td></tr>';
                }
                break;
            case "timecode":
                if (timecodecheck.is(":checked"))
                {
                    html = '<tr class="timecode"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Timecode</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="timecode" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Timecode</td><td><em>None</em></td></tr>';
                }
                break;
            case "tuningrequest":
                if (tuningrequrestcheck.is(":checked"))
                {
                    html = '<tr class="tuningrequest"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Tuning Request</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="tuningrequest" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Tuning Request</td><td><em>None</em></td></tr>';
                }
                break;
            case "unknownsystemmessage":
                if (unknownsystemmessagecheck.is(":checked"))
                {
                    html = '<tr class="unknownsystemmessage"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Unknown System Message</td><td><em>None</em></td></tr>';
                }
                else
                {
                    html = '<tr class="unknownsystemmessage" style="display: none"><td>' + Math.round(e.timestamp).toString() + '</td><td>' + data + '</td><td>Unknown System Message</td><td><em>None</em></td></tr>';
                }
                break;
        }
        $('#table > tbody > tr').eq(0).after(html);
        if ($("#table tr").length > purgeAmt)
        {
            $("#table tr:last").remove();
        }
    }
}, true);

let checkboxes = $(".filters");

$("#allon").click(function ()
{
    checkboxes.prop("checked", true);
    for (let i = 0; i < sessionStorage.length; i++)
    {
        sessionStorage.setItem(sessionStorage.key(i), "true");
    }
    updateFilters();
})
$("#alloff").click(function ()
{
    checkboxes.prop("checked", false);
    sessionStorage.setItem("activesensingcheck", "false");
    sessionStorage.setItem("channelaftertouchcheck", "false");
    sessionStorage.setItem("channelmodecheck", "false");
    sessionStorage.setItem("clockcheck", "false");
    sessionStorage.setItem("continuecheck", "false");
    sessionStorage.setItem("controlchangecheck", "false");
    sessionStorage.setItem("keyaftertouchcheck", "false");
    sessionStorage.setItem("noteoffcheck", "false");
    sessionStorage.setItem("noteoncheck", "false");
    sessionStorage.setItem("nrpncheck", "false");
    sessionStorage.setItem("pitchbendcheck", "false");
    sessionStorage.setItem("programchangecheck", "false");
    sessionStorage.setItem("resetcheck", "false");
    sessionStorage.setItem("songpositioncheck", "false");
    sessionStorage.setItem("songselectcheck", "false");
    sessionStorage.setItem("startcheck", "false");
    sessionStorage.setItem("stopcheck", "false");
    sessionStorage.setItem("sysexcheck", "false");
    sessionStorage.setItem("timecodecheck", "false");
    sessionStorage.setItem("tuningrequestcheck", "false");
    sessionStorage.setItem("unknownsystemmessagecheck", "false");

    updateFilters();
})

$(document).ready()
{
    for (let i = 0; i < sessionStorage.length; i++)
    {
        $("#" + sessionStorage.key(i)).prop("checked", sessionStorage.getItem(sessionStorage.key(i)) === "true");
    }
    updateFilters();
}

activesensingcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("activesensingcheck", activesensingcheck.is(":checked"));
});

channelaftertouchcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("channelaftertouchcheck", channelaftertouchcheck.is(":checked"));
});

channelmodecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("channelmodecheck", channelmodecheck.is(":checked"));
});

clockcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("clockcheck", clockcheck.is(":checked"));
});

continuecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("continuecheck", continuecheck.is(":checked"));
});

controlchangecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("controlchangecheck", controlchangecheck.is(":checked"));
});

keyaftertouchcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("keyaftertouchcheck", keyaftertouchcheck.is(":checked"));
});

noteoffcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("noteoffcheck", noteoffcheck.is(":checked"));
});

noteoncheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("noteoncheck", noteoncheck.is(":checked"));
});

nrpncheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("nrpncheck", nrpncheck.is(":checked"));
});

pitchbendcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("pitchbendcheckcheck", activesensingcheck.is(":checked"));
});

programchangecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("programchangecheck", programchangecheck.is(":checked"));
});

resetcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("resetcheck", resetcheck.is(":checked"));
});

songpositioncheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("songpositioncheck", songpositioncheck.is(":checked"));
});

songselectcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("songselectcheck", songselectcheck.is(":checked"));
});

startcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("startcheck", startcheck.is(":checked"));
});

stopcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("stopcheck", stopcheck.is(":checked"));
});

sysexcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("sysexcheck", sysexcheck.is(":checked"));
});

timecodecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("timecodecheck", timecodecheck.is(":checked"));
});

tuningrequrestcheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("tuningrequestcheck", tuningrequrestcheck.is(":checked"));
});

unknownsystemmessagecheck.click(function ()
{
    updateFilters();
    sessionStorage.setItem("unknownsystemmessagecheck", unknownsystemmessagecheck.is(":checked"));
});

function updateFilters()
{
    if (activesensingcheck.is(":checked"))
    {
        $(".activesensing").show();
    }
    else
    {
        $(".activesensing").hide();
    }

    if (channelaftertouchcheck.is(":checked"))
    {
        $(".chanelaftertouch").show();
    }
    else
    {
        $(".channelaftertouch").hide();
    }

    if (channelmodecheck.is(":checked"))
    {
        $(".channelmode").show();
    }
    else
    {
        $(".channelmode").hide();
    }

    if (clockcheck.is(":checked"))
    {
        $(".clock").show();
    }
    else
    {
        $(".clock").hide();
    }

    if (continuecheck.is(":checked"))
    {
        $(".continue").show();
    }
    else
    {
        $(".continue").hide();
    }

    if (controlchangecheck.is(":checked"))
    {
        $(".controlchange").show();
    }
    else
    {
        $(".controlchange").hide();
    }

    if (keyaftertouchcheck.is(":checked"))
    {
        $(".keyaftertouch").show();
    }
    else
    {
        $(".keyaftertouch").hide();
    }

    if (noteoffcheck.is(":checked"))
    {
        $(".noteoff").show();
    }
    else
    {
        $(".noteoff").hide();
    }

    if (noteoncheck.is(":checked"))
    {
        $(".noteon").show();
    }
    else
    {
        $(".noteon").hide();
    }

    if (nrpncheck.is(":checked"))
    {
        $(".nrpn").show();
    }
    else
    {
        $(".nrpn").hide();
    }

    if (pitchbendcheck.is(":checked"))
    {
        $(".pitchbend").show();
    }
    else
    {
        $(".pitchbend").hide();
    }

    if (programchangecheck.is(":checked"))
    {
        $(".programchange").show();
    }
    else
    {
        $(".programchange").hide();
    }

    if (resetcheck.is(":checked"))
    {
        $(".reset").show();
    }
    else
    {
        $(".reset").hide();
    }

    if (songpositioncheck.is(":checked"))
    {
        $(".songposition").show();
    }
    else
    {
        $(".songposition").hide();
    }

    if (songselectcheck.is(":checked"))
    {
        $(".songselect").show();
    }
    else
    {
        $(".songselect").hide();
    }

    if (startcheck.is(":checked"))
    {
        $(".start").show();
    }
    else
    {
        $(".start").hide();
    }

    if (stopcheck.is(":checked"))
    {
        $(".stop").show();
    }
    else
    {
        $(".stop").hide();
    }

    if (sysexcheck.is(":checked"))
    {
        $(".sysex").show();
    }
    else
    {
        $(".sysex").hide();
    }

    if (timecodecheck.is(":checked"))
    {
        $(".timecode").show();
    }
    else
    {
        $(".timecode").hide();
    }

    if (tuningrequrestcheck.is(":checked"))
    {
        $(".tuningrequest").show();
    }
    else
    {
        $(".tuningrequest").hide();
    }

    if (unknownsystemmessagecheck.is(":checked"))
    {
        $(".unknownsystemmessage").show();
    }
    else
    {
        $(".unknownsystemmessage").hide();
    }
}

$("#toTop").click(function()
{
    $("html, body").animate({scrollTop: 0}, 250);
})

$("#purgeSet").click(function()
{
    purgeAmt = Math.max(1, purgeNum.val()) + 1;
    purgeNum.val(purgeAmt - 1);
    while ($("#table tr").length > purgeAmt)
    {
        $("#table tr:last").remove();
    }
})