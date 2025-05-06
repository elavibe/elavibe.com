// let navigator = document.getElementsByName(".navbar");

// document.addEventListener("scroll", () => {
//   navigator.classlist.add("scrolled");
// });
const nav = document.getElementsByTagName("navbar");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    nav.classList.add("scrolled");
    // nav.classList.remove("nav-transparent");
  } else {
    //   myNav.classList.add("nav-transparent");
    nav.classList.remove("scrolled");
  }
};
