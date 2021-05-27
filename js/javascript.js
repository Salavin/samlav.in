//Enable tooltips:
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

const options = {
    bottom: 'unset', // default: '32px'
    right: '8px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const observer = new MutationObserver(function ()
{
    if (darkmode.isActivated())
    {
        $(".card").addClass("text-white bg-dark");
        $(".list-group-item").addClass("list-group-item-dark");
        $(".download-item").removeClass("list-group-item-dark");
    }
    else
    {
        $(".card").removeClass("text-white bg-dark");
        $(".card-darkmode-ignore").addClass("text-white bg-dark");
        $(".list-group-item").removeClass("list-group-item-dark");
    }
});
observer.observe(document.body, {attributes: true, childList: false, subtree: false});

let carousel = $("#carousel");
let aboutMeTab = $("#nav-about-me-tab");
let resumeTab = $("#nav-resume-tab");
let musicTab = $("#nav-music-tab");
let LFTCard = $("#LFTCard");
let smartDisplayCard = $("#smartDisplayCard");
let websiteCard = $("#websiteCard");
let otherCard = $("#otherCard");
let olderCard = $("#olderCard");
let webDevCard = $("#webDevCard");
let ethicsCard = $("#ethicsCard");
let card = $(".card");
let collapseOne = $("#collapseOne");
let collapseTwo = $("#collapseTwo");
let collapseThree = $("#collapseThree");
let collapseFour = $("#collapseFour");
let collapseFive = $("#collapseFive");
let collapseSix = $("#collapseSix");
let collapseSeven = $("#collapseSeven");

function scrollDown()
{
    $(document).scrollTop(sessionStorage.getItem("scrollValue"));
}

function mouseWheelEvent()
{
    if ((sessionStorage.getItem("selectedTab") == null) && ($(window).scrollTop() + $(window).height() === $(document).height()))
    {
        aboutMeTab.tab('show');
        sessionStorage.setItem("selectedTab", "1")
        $('html, body').animate({
        scrollTop: $("#navbar").offset().top
        }, 1000);
        footerCheck()
    }
}

function footerCheck()
{
    if (window.mobileCheck() === true)
    {
        $("#footerMobile").show();
    }
    else
    {
        $("#footerDesktop").show();
    }
}

$(document).ready(function ()
{
    if (darkmode.isActivated())
    {
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
                if (sessionStorage.getItem("scrollToCard") === "true")
                {
                    openCard();
                }
                else
                {
                    scrollDown();
                }
                break;
            case "3":
                musicTab.tab('show');
                scrollDown();
                break;
        }
        footerCheck()
    }
});

$(window).on('scroll', function()
{
    sessionStorage.setItem("scrollValue", $(document).scrollTop())
    mouseWheelEvent()
});

$(window).on('wheel', function()
{
    mouseWheelEvent()
})

$("#dontShowAgain").click(function()
{
    localStorage.setItem("modal", "false");
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
});

$(".nav-item").click(function ()
{
    if (window.mobileCheck() === true)
    {
        $("#footerMobile").show();
    }
    else
    {
        $("#footerDesktop").show();
    }
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

musicTab.click(function ()
{
    sessionStorage.setItem("selectedTab", "3");
});

// Separate variable declarations here to make this easier in the future hopefully
let firstCard = LFTCard;
let secondCard = smartDisplayCard;
let thirdCard = websiteCard;
let fourthCard = otherCard;
let fifthCard = webDevCard;
let sixthCard = olderCard;
let seventhCard = ethicsCard;

firstCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "1");
    $('html, body').animate({
        scrollTop: firstCard.offset().top - 74
    }, 500)
})

secondCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "2");
    $('html, body').animate({
        scrollTop: firstCard.offset().top - 6 // Each of these offsets has to be in relation to the first card
    }, 500);
});

thirdCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "3");
    $('html, body').animate({
        scrollTop: firstCard.offset().top + 62
    }, 500);
});

fourthCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "4");
    $('html, body').animate({
        scrollTop: firstCard.offset().top + 130
    }, 500);
});

fifthCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "5");
    $('html, body').animate({
        scrollTop: firstCard.offset().top + 198
    }, 500);
});

sixthCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "6");
    $('html, body').animate({
        scrollTop: firstCard.offset().top + 266
    }, 500);
})

seventhCard.click(function ()
{
    sessionStorage.setItem("selectedCard", "7");
    $('html, body').animate({
        scrollTop: firstCard.offset().top + 334
    }, 500);
});

card.on('shown.bs.collapse', function()
{
    sessionStorage.setItem("scrollToCard", "true");
})

card.on('hidden.bs.collapse', function()
{
    sessionStorage.setItem("scrollToCard", "false");
})

function openCard()
{
    let tmp = sessionStorage.getItem("scrollValue"); //This value changes once we start showing the card, so we need to get it now
    //sessionStorage.setItem("scrollToCard", "true");
    switch (sessionStorage.getItem("selectedCard"))
    {
        case "1":
            collapseOne.collapse('show');
            collapseOne.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "2":
            collapseTwo.collapse('show');
            collapseTwo.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "3":
            collapseThree.collapse('show');
            collapseThree.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "4":
            collapseFour.collapse('show');
            collapseFour.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "5":
            collapseFive.collapse('show');
            collapseFive.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "6":
            collapseSix.collapse('show');
            collapseSix.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
            });
            break;
        case "7":
            collapseSeven.collapse('show');
            collapseSeven.on("shown.bs.collapse", function()
            {
                $(document).scrollTop(tmp)
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