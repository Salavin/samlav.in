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

    let aboutMeTab = $("#nav-about-me-tab");
    let resumeTab = $("#nav-resume-tab");
    let projectsTab = $("#nav-projects-tab");

    if (window.sessionStorage.getItem("selectedTab") !== null)
    {
        switch (sessionStorage.getItem("selectedTab"))
        {
            case "1":
                aboutMeTab.tab('show');
                break;
            case "2":
                resumeTab.tab('show');
                break;
            case "3":
                resumeTab.tab('show');
                break;
        }
        $(document).scrollTop = sessionStorage.getItem("scrollValue");
        $("#footer").show();
    }
});

$(window).on('scroll', function()
{
    sessionStorage.setItem("scrollValue", $(document).scrollTop())
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
    sessionStorage.setItem("selectedTab", "1");
});

$("#nav-resume-tab").click(function ()
{
    sessionStorage.setItem("selectedTab", "2");
});

$("#nav-projects-tab").click(function ()
{
    sessionStorage.setItem("selectedTab", "3");
});

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