$(".nav-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top -56
    }, 500);
});