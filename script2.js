const originalArt = document.querySelector("#spaceArt");
const newArt = document.querySelector("#spaceArt2");
const pressMeButton = document.querySelector("#navButton");

pressMeButton.addEventListener("click", (e) => {
  originalArt.classList.toggle("hidden");
  newArt.classList.toggle("hidden");
});
