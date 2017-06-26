$(document).foundation();

var isSliderUpVisible = false;

$(window).scroll(function (e) {
    var e = e || window.event;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 190 && !isSliderUpVisible) {
        $("#sliderUp").css("display", "block");
        isSliderUpVisible = true;
    }
    if (scrolled < 190 && isSliderUpVisible) {
        $("#sliderUp").css("display", "none");
        isSliderUpVisible = false;
    }
});

$("#sliderUp").click(function () {
    $("body,html").animate({ scrollTop: 0 }, "slow", function () {
        $("#sliderUp").css("display", "none");
        isSliderUpVisible = false;
    });
});