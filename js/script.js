$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton({
        direction: "left"
    });
    $('.carousel.carousel-slider').carousel({
        duration: 300,
        fullWidth: true,
        // indicators: true
    });
    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next');
    }, 5000);
    $('.tap-target').tapTarget();
    $("#menu").on("click", function () {
        var instance = M.TapTarget.getInstance($('.tap-target'));
        instance.open();
    });
    $('.sidenav').sidenav({
        isFixed: true
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
});