//Enable tooltips:
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

let darkModeButton = $("#darkMode");
let carousel = $("#carousel");
const darkmode = new Darkmode();
let aboutMeTab = $("#nav-about-me-tab");
let resumeTab = $("#nav-resume-tab");
let projectsTab = $("#nav-projects-tab");
let smartDisplayCard = $("#smartDisplayCard");
let websiteCard = $("#websiteCard");
let otherCard = $("#otherCard");
let webDevCard = $("#webDevCard");
let ethicsCard = $("#ethicsCard");
let musicArrangementsCard = $("#musicArrangements");
let collapseOne = $("#collapseOne");
let collapseTwo = $("#collapseTwo");
let collapseThree = $("#collapseThree");
let collapseFour = $("#collapseFour");
let collapseFive = $("#collapseFive");
let collapseSix = $("#collapseSix");

function scrollDown()
{
    $(document).scrollTop(sessionStorage.getItem("scrollValue"));
}

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

    if (window.sessionStorage.getItem("selectedTab") !== null)
    {
        switch (sessionStorage.getItem("selectedTab"))
        {
            case "1":
                aboutMeTab.tab('show');
                scrollDown();
                break;
            case "2":
                resumeTab.tab('show');
                scrollDown();
                break;
            case "3":
                projectsTab.tab('show');
                openCard();
                break;
        }
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

$(".nav-item").click(function ()
{
    $("#footer").show();
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top - 56
    }, 500);
});

aboutMeTab.click(function ()
{
    sessionStorage.setItem("selectedTab", "1");
});

resumeTab.click(function ()
{
    sessionStorage.setItem("selectedTab", "2");
});

projectsTab.click(function ()
{
    sessionStorage.setItem("selectedTab", "3");
});

smartDisplayCard.click(function()
{
    sessionStorage.setItem("selectedCard", "1");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top - 74
    }, 500);
});

websiteCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "2");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top - 6
    }, 500);
});

otherCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "3");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top + 62
    }, 500);
});

webDevCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "4");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top + 130
    }, 500);
});

ethicsCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "5");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top + 198
    }, 500);
});

musicArrangementsCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "6");
    sessionStorage.setItem("scrollToCard", "false");
    $('html, body').animate({
        scrollTop: smartDisplayCard.offset().top + 266
    }, 500);
});

function openCard()
{
    let tmp = sessionStorage.getItem("scrollValue"); //This value changes once we start showing the card, so we need to get it now
    sessionStorage.setItem("scrollToCard", "true");
    switch (sessionStorage.getItem("selectedCard"))
    {
        case "1":
            collapseOne.collapse('show');
            collapseOne.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
        case "2":
            collapseTwo.collapse('show');
            collapseTwo.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
        case "3":
            collapseThree.collapse('show');
            collapseThree.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
        case "4":
            collapseFour.collapse('show');
            collapseFour.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
        case "5":
            collapseFive.collapse('show');
            collapseFive.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
        case "6":
            collapseSix.collapse('show');
            collapseSix.on("shown.bs.collapse", function()
            {
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    $(document).scrollTop(tmp);
                }
            });
            break;
    }
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
        alert("Cleared local storage and session storage.");
        localStorage.clear();
        sessionStorage.clear();
    }
});