const nav = $(".navbar");

$(document).ready(function () {
  if ($(window).width() < 991) {
    nav.addClass("collasped-nav");
  } else {
    nav.removeClass("collasped-nav");
  }

  $(function () {
    $(document).scroll(function () {
      nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
    });
  });

  $(window).on("resize", function () {
    if ($(this).width() < 991) {
      nav.addClass("collasped-nav");
    } else {
      nav.removeClass("collasped-nav");
    }
  });

  $(".learn-more-btn").click(function () {
    $("#modal").modal("show");
  });
});
