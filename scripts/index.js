$(document).ready(function() {
    // slide up text effect
    //h1 text (Hello, I'm Jack Zhou)
    anime({
        targets: ".slide1",
        translateY: -40,
        opacity: 1,
        duration: 750,
        easing: "easeInQuad",
    });
    //desc text (School, little about me)
    anime({
        targets: ".slide2",
        translateY: -40,
        opacity: 1,
        duration: 750,
        easing: "easeInQuad",
        delay: 250
    });
    //contact me button
    anime({
        targets: ".slide3",
        translateY: -40,
        opacity: 1,
        duration: 750,
        easing: "easeInQuad",
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