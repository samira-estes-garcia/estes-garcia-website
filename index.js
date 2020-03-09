console.log("is working");

//click hamburger to toggle .show mobile-menu
$(".burger").on("click", () => {
  $(".mobile-menu").toggleClass("show");
});

//click anywhere outside the hamburger to close mobile-nav
$(".hero").on("click", () => {
  $(".mobile-menu").removeClass("show");
});

// $(".about").on("click", () => {
//   $(".mobile-menu").removeClass("show");
// });

// $(".services").on("click", () => {
//   $(".mobile-menu").removeClass("show");
// });

// $(".contact").on("click", () => {
//   $(".mobile-menu").removeClass("show");
// });

// $("footer").on("click", () => {
//   $(".mobile-menu").removeClass("show");
// });

//shrinking nav (desktop nav)
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 350) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

//shrinking nav (mobile nav)
if ($(window).width() <= 1000) {
  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 350) {
      $("header").addClass("shrink-mobile");
    } else {
      $("header").removeClass("shrink-mobile");
    }
  });
}
