//Enable tooltips:
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

let darkModeButton = $("#darkMode");
let carousel = $("#carousel");
const darkmode = new Darkmode();
$(document).ready(function ()
{
    if (darkmode.isActivated())
    {
        darkModeButton.addClass("btn-light");
        darkModeButton.css("color", "black");
        $(".card").addClass("text-white bg-dark");
        $(".list-group-item").addClass("list-group-item-dark");
        $(".download-item").removeClass("list-group-item-dark");
    }

    if (window.innerWidth < window.innerHeight)
    {
        carousel.carousel('pause');
    }

    let aboutMeTab = $("#nav-about-me-tab");
    let resumeTab = $("#nav-resume-tab");
    let projectsTab = $("#nav-projects-tab");
    // console.log(readCookie("selectedTab"));
    switch (readCookie("selectedTab"))
    {
        case 1:
            aboutMeTab.addClass("active");
            aboutMeTab.attr("aria-selected", true);
            break;
        case 2:
            resumeTab.addClass("active");
            resumeTab.attr("aria-selected", true);
            break;
        case 3:
            projectsTab.addClass("active");
            projectsTab.attr("aria-selected", true);
            break;
    }
});
darkModeButton.click(function ()
{
    darkmode.toggle();
    darkModeButton.toggleClass("btn-light");
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
    console.log("resized!");
    if ($(window).width() < $(window).height())
    {
        console.log("stopped carousel!");
        carousel.carousel(0);
        carousel.carousel('pause');
    } else
    {
        console.log("resumed carousel!");
        carousel.carousel('cycle');
    }
});

carousel.click(function ()
{
    carousel.carousel('next');
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
    createCookie("selectedTab", 1);
});

$("#nav-resume-tab").click(function ()
{
    createCookie("selectedTab", 2);
});

$("#nav-projects-tab").click(function ()
{
    createCookie("selectedTab", 3);
});

function createCookie(key, value)
{
    document.cookie = escape(key) + "=" + escape(value) + ";";
    // console.log("Creating new cookie with key: " + key + " value: " + value);
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