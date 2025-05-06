document.addEventListener("DOMContentLoaded", () => {
  const mainNavigation = document.getElementById("mainNavbar");
  if (this.scrollTop() > mainNavigation.scrollHeight());
  mainNavigation.classList.add("scrolled");

  //   $(function () {
  //     $(document).scroll(function () {
  //       var $nav = $("#mainNavbar");
  //       $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  //     });
  //   });
});
