let h = 0;
let s = 100;
let l = 50;
let sensitivity = 25;
let visible = true;

$(window).on("mousemove", function()
{
    let y = event.clientY;
    if (y < window.innerHeight / 2)
    {
        s = y / (window.innerHeight / 2) * 100;
    }
    else if (y > window.innerHeight / 2)
    {
        s = (1 - (y - (window.innerHeight / 2)) / (window.innerHeight / 2)) * 100;
    }
    else
    {
        s = 100;
    }

    l = (event.clientX / window.innerWidth) * 100;
    changeColor();
});

$("#sensitivity").on("input", function()
{
    sensitivity = (101 - this.value) * 2;
    h = ((document.body.scrollTop / sensitivity)) % 360;
    changeColor();
    $("#sensitivityValue").text("Scroll Sensitivity: " + this.value);
});

document.addEventListener("scroll", function ()
{
    h = ($(document).scrollTop() / sensitivity) % 360;
    document.getElementById("rainbow").style.backgroundColor = "hsl(" + h + "," + s + "%, " + l + "%)";
    document.getElementById("hsl").innerHTML = "Hue: " + Math.round(h) + " | Saturation: " + Math.round(s) + "% | Light: " + Math.round(l) + "%";
});

document.addEventListener("keydown", function(e)
{
    if (e.code === "KeyH")
    {
        if (visible)
        {
            document.getElementById("navbar").style.visibility = "hidden";
            visible = false;
        }
        else
        {
            document.getElementById("navbar").style.visibility = "visible";
            visible = true;
        }
    }
});

function changeColor()
{
    $("#rainbow").css("background-color", "hsl(" + h + "," + s + "%, " + l + "%)");
    $("#hsl").text("Hue: " + Math.round(h) + " | Saturation: " + Math.round(s) + "% | Light: " + Math.round(l) + "%")
}