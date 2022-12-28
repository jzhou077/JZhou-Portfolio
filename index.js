$(document).ready(function() {
    $(".contactBtn").click(function () {
        $(".modal").css("visibility", "visible");
        $(".modal").css("opacity", "1");
        $(".overlay").css("display", "block");
        $(".overlay").css("opacity", "0.25");
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