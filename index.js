//Smooth scrolling throuout the page
$("a").smoothScroll({ speed: 600, easing: "swing" });
// load different particle config on smaller screen sizes
window.onload = function() {
  if (screen.width < 960) {
    particlesJS.load("particles-js", "./configs/particles2.json");
  } else {
    particlesJS.load("particles-js", "./configs/particles.json");
  }
};
window.addEventListener(
  "resize",
  function() {
    if (screen.width < 960) {
      particlesJS.load("particles-js", "./configs/particles2.json");
    } else {
      particlesJS.load("particles-js", "./configs/particles.json");
    }
  },
  true
);
//animating the arrow button in the first page
$(function() {
  $(".down-arrow").addClass("animated pulse infinite");
});

//remove the preloader overlay
setTimeout(function() {
  $(document).ready(function() {
    $(".preloader").hide();
    $("body").css("overflow", "auto");
    Waypoint.refreshAll();
  });
}, 2000);

//the navbar drops after reaching a certain point

//navbar dropdown
$("#About").waypoint(
  direction => {
    if (direction === "down") {
      $("#navigation").css("display", "block");
      $("#navigation").removeClass("fadeOutUp");
      $("#navigation").addClass("fadeInDown");
    }
  },
  { offset: "50%" }
);
$("#About").waypoint(
  direction => {
    if (direction === "up") {
      $("#navigation").removeClass("fadeInDown");
      $("#navigation").addClass("fadeOutUp");
    }
  },
  { offset: "50%" }
);

//navbar active section
let navbar = $("#navigation");
$("#About").waypoint(direction => {
  if (direction === "down") {
    navbar.find(".active").removeClass("active");
    navbar.find(".aboutLink").addClass("active");
  }
});
$("#About").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".homeLink").addClass("active");
  }
});

$("#Skills").waypoint(direction => {
  if (direction === "down") {
    navbar.find(".active").removeClass("active");
    navbar.find(".skillsLink").addClass("active");
  }
});
$("#Skills").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".aboutLink").addClass("active");
  }
});

$("#Projects").waypoint(direction => {
  if (direction === "down") {
    navbar.find(".active").removeClass("active");
    navbar.find(".projectsLink").addClass("active");
  }
});
$("#Projects").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".skillsLink").addClass("active");
  }
});

$("#Contact").waypoint(
  direction => {
    if (direction === "down") {
      navbar.find(".active").removeClass("active");
      navbar.find(".contactLink").addClass("active");
    }
  },
  { offset: "5%" }
);
$("#Contact").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".projectsLink").addClass("active");
  }
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
//flip the arrow of the skills table
$(".flippable").css({
  display: "block",
  fontSize: "20px",
  transform: "rotateX(180deg)"
});
const rotatedPosition =
  "matrix3d(1, 0, 0, 0, 0, -1, 1.22465e-16, 0, 0, -1.22465e-16, -1, 0, 0, 0, 0, 1)";
$(".flippable").click(function() {
  if ($(this).css("transform") == rotatedPosition) {
    $(this).css("transform", "rotateX(0deg)");
  } else {
    $(this).css("transform", "rotateX(180deg)");
  }
});

//carousel configs
$(".carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: true
      }
    }
  ]
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".carousel",
  arrows: true,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 630,
      settings: {}
    }
  ]
});

//ease buttons on hover

$(".redirect").hover(function() {
  $(this)
    .stop()
    .animate(
      {
        backgroundColor: "#f4f4f4",
        color: "#2f80ed"
      },
      "fast"
    );
});
$(".redirect").hover(
  function() {
    $(this)
      .stop()
      .animate(
        {
          backgroundColor: "#f4f4f4",
          color: "#2f80ed"
        },
        "swing"
      );
  },
  function() {
    $(this)
      .stop()
      .animate(
        {
          backgroundColor: "#2f80ed",
          color: "#f4f4f4"
        },
        "swing"
      );
  }
);
$(".submit-form").hover(
  function() {
    $(this)
      .stop()
      .animate(
        {
          backgroundColor: "#5bc0be",
          color: "#f4f4f4"
        },
        "swing"
      );
  },
  function() {
    $(this)
      .stop()
      .animate(
        {
          backgroundColor: "#f4f4f4",
          color: "#5bc0be"
        },
        "swing"
      );
  }
);
$(".media")
  .children()
  .hover(
    function() {
      $(this).css({
        backgroundColor: "#f4f4f4",
        color: "#5bc0be"
      });
    },
    function() {
      $(this).css({
        backgroundColor: "#5bc0be",
        color: "#f4f4f4"
      });
    }
  );
