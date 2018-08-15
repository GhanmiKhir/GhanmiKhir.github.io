$(function() {
  $(".down-arrow").addClass("animated pulse infinite");
});
$(document).ready(function() {
  //compares the scroll to the last scroll
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      $("#navigation").removeClass("fadeInUp");
      $("#navigation").addClass("fadeOutUp");
    } else {
      // upscroll code
      $("#navigation").removeClass("fadeOutUp");
      $("#navigation").addClass("fadeInUp");
    }
    lastScrollTop = st;
  });
  // $(window).scroll(function() {
  //   if ($(document).scrollTop() > 10) {
  //     $("#navigation").addClass("fadeOutUp");
  //   } else if ($(document).scrollTop() < 10) {
  //     $("#navigation").removeClass("fadeOutUp");
  //     $("#navigation").addClass("fadeInUp");
  //   }
  // });
});
//the nav bar toggles between transparent and the the main color when depassing the view
$(function() {
  var h = jQuery(window).height();
  $(window).scroll(function() {
    if ($("#navigation").offset().top <= h / 4) {
      if ($("#navigation").css("backgroundColor") != "transparent") {
        $("#navigation")
          .stop()
          .animate({ backgroundColor: "transparent" }, 500);
      }
    } else {
      if ($("#navigation").css("backgroundColor") != "#0d3036") {
        $("#navigation")
          .stop()
          .animate({ backgroundColor: "#0d3036" }, 500);
      }
    }
  });
});
