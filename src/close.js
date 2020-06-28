$(document).ready(() => {
  // MENU
  $(".navbar__menu-btn").on("click", function () {
    $(".nav__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");

  });

});