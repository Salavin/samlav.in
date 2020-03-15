$(".nav-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-tabContent").offset().top -56
    }, 500);
});

// function moveScroller() {
//     var $anchor = $("#background");
//     var $scroller = $('#sticky');
//
//     var move = function() {
//         var st = $(window).scrollTop();
//         var ot = $anchor.offset().top;
//         if(st > ot) {
//             $scroller.css({
//                 position: "fixed",
//                 top: "0px"
//             });
//         } else {
//             $scroller.css({
//                 position: "relative",
//                 top: ""
//             });
//         }
//     };
//     $(window).scroll(move);
//     move();
// }