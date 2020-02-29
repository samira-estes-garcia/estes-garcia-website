console.log("is working");

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 350) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});
