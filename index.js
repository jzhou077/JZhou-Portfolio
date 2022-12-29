$(document).ready(function() {
    // slide up text effect

    var slideAnimation1 = anime({
        targets: ".slide1",
        translateY: -40,
        opacity: 1,
        duration: 500,
        easing: "linear",
    });

    var slideAnimation2 = anime({
        targets: ".slide2",
        translateY: -40,
        opacity: 1,
        duration: 500,
        easing: "linear",
        delay: 250
    });

    var slideAnimation3 = anime({
        targets: ".slide3",
        translateY: -40,
        opacity: 1,
        duration: 500,
        easing: "linear",
        delay: 500
    });

    // buttons
    $(".contactBtn").click(function () {
        $(".modal").css("visibility", "visible");
        $(".modal").css("opacity", "1");
        $(".overlay").css("display", "block");
        $(".overlay").css("opacity", "0.2");
    });
    $(".modalCloseBtn").click(function(){
        $(".modal").css("opacity", "0");
        $(".modal").css("visibility", "hidden");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("display", "none");
    });
    $(".overlay").click(function () {
        $(".modal").css("opacity", "0");
        $(".modal").css("visibility", "hidden");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("display", "none");
    });
});