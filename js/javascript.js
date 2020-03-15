let darkModeButton = $("#darkMode");
const darkmode = new Darkmode();
$(document).ready(function() {
    if(darkmode.isActivated())
    {
        darkModeButton.addClass("btn-light");
    }

    let aboutMeTab = $("#nav-about-me-tab");
    let resumeTab = $("#nav-resume-tab");
    let projectsTab = $("#nav-projects-tab");
    // console.log(readCookie("selectedTab"));
    switch (readCookie("selectedTab")) {
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
darkModeButton.click(function () {
    darkmode.toggle();
    darkModeButton.toggleClass("btn-light");
});

$(".nav-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top - 56
    }, 500);
});

$("#nav-about-me-tab").click(function(){
    createCookie("selectedTab", 1);
});

$("#nav-resume-tab").click(function(){
    createCookie("selectedTab", 2);
});

$("#nav-projects-tab").click(function(){
    createCookie("selectedTab", 3);
});

function createCookie(key, value) {
    document.cookie = escape(key) + "=" + escape(value) + ";";
    // console.log("Creating new cookie with key: " + key + " value: " + value);
}

function readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}