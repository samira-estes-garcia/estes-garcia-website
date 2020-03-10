console.log("is working");

//click hamburger to toggle .show mobile-menu
$(".burger").on("click", () => {
  $(".mobile-menu").toggleClass("show");
});

//click anywhere outside the hamburger to close mobile-nav
$(".hero").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$(".about").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$(".services").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$(".contact").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$("footer").on("click", () => {
  $(".mobile-menu").removeClass("show");
});

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

//capture form info and send vals to email address
$("#contact-form").submit(function(event) {
  event.preventDefault();
  console.log("Submit was clicked");

  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  let status = $(".status");
  status.empty();

  if (name.length >= 5) {
    status.append("<div>Name is valid</div>");
  } else {
    event.preventDefault();
    status.append("<div>Name is not valid</div>");
  }

  if (email.length > 5 && email.includes("@") && email.includes(".")) {
    status.append("<div>Email is valid</div>");
  } else {
    event.preventDefault();
    status.append("<div>Email is not valid</div>");
  }

  if (message.length >= 10) {
    status.append("<div>Message is valid</div>");
  } else {
    event.preventDefault();
    status.append("<div>Message is not valid</div>");
  }
});
