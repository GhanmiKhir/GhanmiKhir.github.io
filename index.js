//Smooth scrolling throuout the page
$("a").smoothScroll({ speed: 600, easing: "swing" });

//animating the arrow button in the first page
$(function() {
  $(".down-arrow").addClass("animated pulse infinite");
});

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

// Animating the Skills table
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

//Animating the Achievments cards
$(".card-body").slideUp();
$(".show-more")
  .children("i")
  .addClass("animated pulse infinite");
//for the skills arrow
$("th")
  .children("i")
  .addClass("animated pulse infinite");

$(".show-more")
  .children("i")
  .click(function() {
    $(this)
      .parent()
      .siblings(".card-body")
      .slideToggle("slow");
  });
//filp the arrow each time you click on it
$(".show-more").click(function() {
  if ($(this).css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
    $(this).css("transform", "rotate(180deg)");
  } else {
    $(this).css("transform", "rotate(0deg)");
  }
});
