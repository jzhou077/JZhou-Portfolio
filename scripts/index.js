$(document).ready(function() {

    //slide up text effect
    var t1 = gsap.timeline({defaults: { ease: "power1.in"}});
    t1.from(".slide1", {yPercent: 100, duration: 0.75});
    t1.from(".slide2", {yPercent: 100, duration: 0.75});
    t1.to(".slide3", {opacity: 1, duration: 0.5});

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