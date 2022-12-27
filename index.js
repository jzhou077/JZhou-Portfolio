$(document).ready(function() {
    $(".contactBtn").click(function () {
        $(".modal").css("visibility", "visible");
        $(".modal").css("opacity", "1");
    });
    $(".modalCloseBtn").click(function(){
        $(".modal").css("opacity", "0");
        $(".modal").css("visibility", "hidden");
    });
});