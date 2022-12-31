$(document).ready(function() {
    $(".menuBtn").click(function() {
        $(this).toggleClass("menuBtnChanged");
        $(".menu").toggleClass("menuShown");
        $(".mainContent").toggleClass("mainContentHidden");
    });
});