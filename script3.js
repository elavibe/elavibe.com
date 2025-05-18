const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");
const spaceBtn = ducument.querySelector("#spaceButton");

spaceBtn.addEventListener("click", (e) => {
  alert("buttonworks");
  dan.classList.toggle("hidden");
  space.classList.toggle("hidden");
});
