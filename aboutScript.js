const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");
//const spaceBtn = ducument.querySelector("#spaceButton");
const h1Button = document.querySelector(".mc");

h1Button.addEventListener("click", (e) => {
  space.classList.toggle("hidden");
  dan.classList.toggle("hidden");
});
