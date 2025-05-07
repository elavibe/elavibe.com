const navigationButton = document.getElementsByClassName("changePicture");
const picture = document.getElementById("spaceArt");
const picture2 = document.getElementById("spaceArt2");

navigationButton.addEventListener("click", (e) => {
  if (picture === classlist("hidden")) picture.classList.add("hidden");
  picture2.classList.remove("hidden");
});
