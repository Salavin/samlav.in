//Enable tooltips:
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

let darkModeButton = $("#darkMode");
let carousel = $("#carousel");
const darkmode = new Darkmode();
$(document).ready(function ()
{
    if (darkmode.isActivated())
    {
        darkModeButton.addClass("btn-light");
        darkModeButton.removeClass("btn-dark");
        darkModeButton.css("color", "black");
        $(".card").addClass("text-white bg-dark");
        $(".list-group-item").addClass("list-group-item-dark");
        $(".download-item").removeClass("list-group-item-dark");
    }

    let aboutMeTab = $("#nav-about-me-tab");
    let resumeTab = $("#nav-resume-tab");
    let projectsTab = $("#nav-projects-tab");
    // console.log(readCookie("selectedTab"));
    switch (readCookie("selectedTab"))
    {
        case "1":
            aboutMeTab.addClass("active");
            aboutMeTab.attr("aria-selected", true);
            break;
        case "2":
            resumeTab.addClass("active");
            resumeTab.attr("aria-selected", true);
            break;
        case "3":
            projectsTab.addClass("active");
            projectsTab.attr("aria-selected", true);
            break;
    }

    if (localStorage.getItem("modal") !== "false")
    {
        $(".modal").modal();
    }
});

$(window).on('load', function()
{
    //Some of the pictures will be cut off, so we'll just turn this off
    //This apparently has to be checked after the page has been fully loaded; doesn't work using $(document).ready
    if ($(window).width() < $(window).height())
    {
        carousel.carousel('pause');
    }

    if ($(window).width() < 400)
    {
        darkModeButton.addClass("float");
    }
});

$("#dontShowAgain").click(function()
{
    localStorage.setItem("modal", "false");
});

darkModeButton.click(function ()
{
    darkmode.toggle();
    darkModeButton.toggleClass("btn-light");
    darkModeButton.toggleClass("btn-dark");
    if (darkmode.isActivated())
    {
        darkModeButton.css("color", "black");
    }
    else
    {
        darkModeButton.css("color", "white");
    }
    $(".card").toggleClass("text-white bg-dark");
    $(".card-darkmode-ignore").toggleClass("text-white bg-dark");
    $(".list-group-item").toggleClass("list-group-item-dark");
    $(".download-item").removeClass("list-group-item-dark");
});

$(window).resize(function ()
{
    if ($(window).width() < $(window).height())
    {
        carousel.carousel(0);
        carousel.carousel('pause');
    } else
    {
        carousel.carousel('cycle');
    }
    if ($(window).width() < 400)
    {
        darkModeButton.addClass("float");
    }
    else
    {
        darkModeButton.removeClass("float");
    }

});

let accordion = $("#accordion");
accordion.collapse();

$(".nav-item").click(function ()
{
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top - 56
    }, 500);
    $("#footer").show();
});

$("#nav-about-me-tab").click(function ()
{
    createCookie("selectedTab", "1");
});

$("#nav-resume-tab").click(function ()
{
    createCookie("selectedTab", "2");
});

$("#nav-projects-tab").click(function ()
{
    createCookie("selectedTab", "3");
});

function createCookie(key, value)
{
    document.cookie = escape(key) + "=" + escape(value) + ";";
    console.log("Creating new cookie with key: " + key + " value: " + value);
}

function readCookie(name)
{
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++)
    {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ')
        {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0)
        {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}

let presses = [];
let keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
document.addEventListener('keydown', function(e)
{
    presses.push(e.code);
    if (keys[presses.length - 1] !== presses[presses.length - 1])
    {
        presses = [];
    }
    else if (presses.toString() === keys.toString())
    {
        presses = [];
        alert("Cleared local storage.");
        localStorage.clear();
    }
});