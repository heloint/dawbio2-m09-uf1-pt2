const nav = $(".navbar");

$(document).ready(function () {
  // Apply navbar background color by default,
  // if at start up the screen condition is met.
  if ($(window).width() < 991) {
    nav.addClass("collasped-nav");
  } else {
    nav.removeClass("collasped-nav");
  }

  // Apply navbar background color on scroll down,
  // if at start up the screen condition is met.
  $(function () {
    $(document).scroll(function () {
      nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
    });
  });

  // Apply navbar background color on size change,
  // if at start up the screen condition is met.
  $(window).on("resize", function () {
    if ($(this).width() < 991) {
      nav.addClass("collasped-nav");
    } else {
      nav.removeClass("collasped-nav");
    }
  });
});
