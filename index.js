console.log("is working");

//click hamburger to toggle .show mobile-menu
$(".burger").on("click", () => {
  $(".mobile-menu").toggleClass("show");
});

//click anywhere outside the hamburger to close mobile-nav
$(".hero").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$("#about").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$("#services").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$("#contact").on("click", () => {
  $(".mobile-menu").removeClass("show");
});
$("footer").on("click", () => {
  $(".mobile-menu").removeClass("show");
});

//close .mobile-menu when menu option is clicked
$(".mobile-options").on("click", () => {
  $(".mobile-menu").removeClass("show");
});

//shrinking nav (desktop nav)
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 350) {
    $("header").addClass("shrink") && $("header").addClass("shrink-mobile");
  } else {
    $("header").removeClass("shrink") &&
      $("header").removeClass("shrink-mobile");
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

//click outside of success-modal to close the popup
function closeSuccessModal() {
  $("body").on("click", () => {
    $(".success-modal").css("display", "none");
  });
}

//capture form info and send vals to email address
let $contactForm = $("#contact-form");
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "https://formspree.io/moqwgnvp",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json",
    beforeSend: function() {
      $contactForm.append(
        '<div class="alert alert--loading">Sending message…</div>'
      );
    },
    success: function(data) {
      $contactForm.find(".alert--loading").hide();
      $contactForm.append(
        '<div class="success-modal animated fadeIn"><img src="assetsicons/success-img.svg" alt="You successfully submitted the form!" /></div>'
      );
      closeSuccessModal();
      $contactForm.trigger("reset");
    },
    error: function(err) {
      $contactForm.find(".alert--loading").hide();
      $contactForm.append(
        '<div class="error-modal"><div class="modal-content error-modal-content">ERROR! Oops, there was an error.</div><div class="close">x image</div></div>'
      );
    }
  });
});
