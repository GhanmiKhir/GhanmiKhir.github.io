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

// parallax effect
if ($(window).width() > 768) {
  $(window).scroll(function() {
    parallax();
  });
}

function parallax() {
  let wScroll = $(window).scrollTop() - $(".parallax--bg").position().top;
  $(".parallax--bg").css(
    "backgroundPosition",
    "center " + wScroll * 0.4 + "px"
  );
}

//the navbar drops after reaching a certain point

//navbar dropdown
$("#About").waypoint(
  direction => {
    if (direction === "down") {
      if ($(window).width() <= 768) {
        $(".menu-wrapper").animate(
          {
            backgroundColor: "rgba(13, 48, 54, 0.95)",
            borderColor: "rgba(13, 48, 54, 0.95)"
          },
          500
        );
        return;
      }
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
      if ($(window).width() <= 768) {
        $(".menu-wrapper").animate(
          {
            backgroundColor: "transparent",
            borderColor: "#fcfcfc"
          },
          500
        );
        return;
      }
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
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slAbout").css("backgroundColor", "#EAEAEA");
  }
});
$("#About").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".homeLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slHome").css("backgroundColor", "#EAEAEA");
  }
});

$("#Skills").waypoint(direction => {
  if (direction === "down") {
    navbar.find(".active").removeClass("active");
    navbar.find(".skillsLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slSkills").css("backgroundColor", "#EAEAEA");
  }
});
$("#Skills").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".aboutLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slAbout").css("backgroundColor", "#EAEAEA");
  }
});

$("#Projects").waypoint(direction => {
  if (direction === "down") {
    navbar.find(".active").removeClass("active");
    navbar.find(".projectsLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slProjects").css("backgroundColor", "#EAEAEA");
  }
});
$("#Projects").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".skillsLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slSkills").css("backgroundColor", "#EAEAEA");
  }
});

$("#Contact").waypoint(
  direction => {
    if (direction === "down") {
      navbar.find(".active").removeClass("active");
      navbar.find(".contactLink").addClass("active");
      $(".slBody")
        .children()
        .css("backgroundColor", "#FCFCFC");
      $(".slContact").css("backgroundColor", "#EAEAEA");
    }
  },
  { offset: "5%" }
);
$("#Contact").waypoint(direction => {
  if (direction === "up") {
    navbar.find(".active").removeClass("active");
    navbar.find(".projectsLink").addClass("active");
    $(".slBody")
      .children()
      .css("backgroundColor", "#FCFCFC");
    $(".slProjects").css("backgroundColor", "#EAEAEA");
  }
});
// HAMBURGER

// Animating the Hamburger menu
let hideSidebar = function() {
  $(".slideMenu").removeClass("slideInRight");
  $(".slideMenu").addClass("slideOutRight");
  $(".overlay")
    .stop()
    .fadeOut(700);
  setTimeout(function() {
    $("#Hamburger").css({ width: "0", height: "0" });
  }, 700);
};
let showSidebar = function() {
  $("#Hamburger").css({ width: "100%", height: "100%" });
  $(".slideMenu").removeClass("slideOutRight");
  $(".slideMenu").css("display", "block");
  $(".slideMenu").addClass("slideInRight");
  $(".overlay")
    .stop()
    .fadeIn(700);
};
$(".overlay").on("click", function() {
  hideSidebar();
  $(".hamburger-menu").toggleClass("animate");
});
//slider in/out when clicking on the humberger button
$(".menu-wrapper").on("click", function() {
  $(".hamburger-menu").toggleClass("animate");
  if ($(".slideMenu").hasClass("slideInRight")) {
    hideSidebar();
  } else {
    showSidebar();
  }
});

//changing background based on position

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
