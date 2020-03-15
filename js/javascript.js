$(document).ready(function() {
    let aboutMeTab = $("#nav-about-me-tab");
    let resumeTab = $("#nav-resume-tab");
    let projectsTab = $("#nav-projects-tab");
    console.log(readCookie("selectedTab"));
    switch (readCookie("selectedTab")) {
        case 1:
            aboutMeTab.classList.add("active");
            aboutMeTab.attr("aria-selected", true);
            break;
        case 2:
            resumeTab.classList.add("active");
            resumeTab.attr("aria-selected", true);
            break;
        case 3:
            projectsTab.classList.add("active");
            projectsTab.attr("aria-selected", true);
            break;
    }
});

$(".nav-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top -56
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
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    console.log("Creating new cookie with key: " + key + " value: " + value);
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
let darkModeOptions = {
    bottom: '56px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(darkModeOptions);
darkmode.showWidget();