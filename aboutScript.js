const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");

const danBtn = document.querySelectorAll("img")[0];
const spaceBtn = document.querySelectorAll("img")[1];
//const h1Button = document.querySelector(".mc");

// h1Button.addEventListener("click", () => {
//   space.classList.toggle("hidden");
//   dan.classList.toggle("hidden");
// });

spaceBtn.addEventListener("click", () => {
  space.classList.toggle("hidden");
  dan.classList.toggle("hidden");
});
danBtn.addEventListener("click", () => {
  dan.classList.toggle("hidden");
  space.classList.toggle("hidden");
});
