const dan = document.querySelector("#danPic");
const space = document.querySelector("#spacePic");

const danBtn = document.querySelectorAll("img")[0];
const spaceBtn = document.querySelectorAll("img")[1];

spaceBtn.addEventListener("click", () => {
  space.classList.toggle("hidden");
  dan.classList.toggle("hidden");
});
danBtn.addEventListener("click", () => {
  dan.classList.toggle("hidden");
  space.classList.toggle("hidden");
});

//const button = document.querySelector("#mainNavbar");

// button.addEventListener("click", () => {
//   const newColor = makeRandColor();
//   document.body.style.backgroundColor = newColor;
//   //h1Text.innerText = newColor;
// });

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };
