const originalArt = document.querySelector("#spaceArt");
const newArt = document.querySelector("#spaceArt2");
const pressMeButton = document.querySelector("#navButton");

pressMeButton.addEventListener("click", (e) => {
  originalArt.classList.toggle("hidden");
  newArt.classList.toggle("hidden");
});

const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");
const spaceBtn = ducument.querySelector(".spaceButton");

// spaceBtn.addEventListener("click", (e) => {
//   alert("buttonworks");
// });

// spaceBtn.addEventListener("click", (e) => {
//   alert("buttonworks");
//   dan.classList.toggle("hidden");
//   space.classList.toggle("hidden");
// });

// function removeHidden() {
//   if (space.classList.contains("hidden")) {
//     space.classList.remove("hidden");
//     space.classList.add("");
//   } else if (dan.classList.contains("hidden")) {
//     dan.classList.remove("hidden");
//     dan.classList.add("");
//   }
// }
