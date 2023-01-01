$(document).ready(function() {
    $(".menuBtn").click(function() {
        $(this).toggleClass("menuBtnChanged");
        $(".menu").toggleClass("menuShown");
        $(".mainContent").toggleClass("mainContentHidden");
        if ($(".menu").hasClass("menuShown")){
            gsap.fromTo(".navigation-item a", {yPercent: 100}, {yPercent: 0, duration: 0.5, stagger: 0.1, ease: "slow"});
        }
        else {
            gsap.to(".navigation-item a", {yPercent: -100, duration: 0.5, stagger: 0.05, ease: "slow"});
        }
    });
});