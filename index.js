$("a").smoothScroll({ speed: 600, easing: "swing" });
$(function() {
  $(".down-arrow").addClass("animated pulse infinite");
});
// $(document).ready(function() {
//   //compares the scroll to the last scroll
//   var lastScrollTop = 0;
//   $(window).scroll(function(event) {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//       // downscroll code
//       $("#navigation").removeClass("fadeInUp");
//       $("#navigation").addClass("fadeOutUp");
//     } else {
//       // upscroll code
//       $("#navigation").removeClass("fadeOutUp");
//       $("#navigation").addClass("fadeInUp");
//     }
//     lastScrollTop = st;
//   });
//
// });

//remove the preloader overlay
setTimeout(function() {
  $(document).ready(function() {
    $(".preloader").hide();
    $("body").css("overflow", "auto");
  });
}, 2000);

//the nav bar toggles between transparent and the the main color when depassing the view
$(function() {
  var h = jQuery(window).height();
  $(window).scroll(function() {
    if ($("#navigation").offset().top <= h / 4) {
      if ($("#navigation").css("backgroundColor") != "transparent") {
        $("#navigation")
          .stop()
          .animate({ backgroundColor: "transparent" }, 1000);
      }
    } else {
      if ($("#navigation").css("backgroundColor") != "#0d3036") {
        $("#navigation")
          .stop()
          .animate({ backgroundColor: "#0d3036" }, 1000);
      }
    }
  });
});

// Animating the table
$(".thead-light").css("cursor", "pointer");

$(".hide-languages").click(function() {
  $(this)
    .siblings(".language")
    .children()
    .slideToggle("slow");
  $(".language").toggleClass("animated fadeOut");
});
$(".hide-programming").click(function() {
  $(this)
    .siblings(".programming")
    .children()
    .slideToggle("slow");
  $(".programming").toggleClass("animated fadeOut");
});
$(".hide-tools").click(function() {
  $(this)
    .siblings(".tool")
    .children()
    .slideToggle("slow");
  $(".tool").toggleClass("animated fadeOut");
});
