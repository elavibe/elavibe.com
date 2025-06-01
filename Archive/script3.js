const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");
const spaceBtn = ducument.querySelector("#spaceButton");
const h1Button = document.querySelector(".mc");

h1Button.addEventListener("click", (e) => {
  //alert("buttonworks");
  dan.classList.toggle("hidden");
  space.classList.toggle("hidden");
});
