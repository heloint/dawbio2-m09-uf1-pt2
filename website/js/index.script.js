$(document).ready(function () {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(".learn-more-btn").click(function () {
    $("#modal").modal("show");
  });
});
