var randomNumber1 = Math.floor(Math.random() * 112) + 1; //1-6

var randomDiceImage = "PostItTall" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 49) + 1;

var randomImageSource2 = "PostItSquare" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var randomNumber3 = Math.floor(Math.random() * 49) + 1;

var randomImageSource3 = "PostItSquare" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

var randomNumber4 = Math.floor(Math.random() * 112) + 1;

var randomImageSource4 = "PostItTall" + randomNumber4 + ".png";

document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

var randomNumber5 = Math.floor(Math.random() * 86) + 1;

var randomImageSource5 = "PostItWide" + randomNumber5 + ".png";

document.querySelectorAll("img")[4].setAttribute("src", randomImageSource5);

var randomNumber6 = Math.floor(Math.random() * 112) + 1;

var randomImageSource6 = "PostItTall" + randomNumber6 + ".png";

document.querySelectorAll("img")[5].setAttribute("src", randomImageSource6);

var randomNumber7 = Math.floor(Math.random() * 86) + 1;

var randomImageSource7 = "PostItWide" + randomNumber7 + ".png";

document.querySelectorAll("img")[6].setAttribute("src", randomImageSource7);

//Second set of images

var randomNumber8 = Math.floor(Math.random() * 112) + 1; //1-6

var randomDiceImage = "PostItTall" + randomNumber8 + ".png"; //dice1.png - dice6.png

var randomImageSource8 = randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document
  .querySelectorAll("img")[7]
  .setAttribute("src", randomImageSource8);

//Tall
var randomNumber9 = Math.floor(Math.random() * 86) + 1;

var randomImageSource9 = "PostItWide" + randomNumber9 + ".png";

document.querySelectorAll("img")[8].setAttribute("src", randomImageSource9);

//Square
var randomNumber10 = Math.floor(Math.random() * 49) + 1;

var randomImageSource10 = "PostItSquare" + randomNumber10 + ".png";

document.querySelectorAll("img")[9].setAttribute("src", randomImageSource10);

//Tall

var randomNumber11 = Math.floor(Math.random() * 112) + 1;

var randomImageSource11 = "PostItTall" + randomNumber11 + ".png";

document.querySelectorAll("img")[10].setAttribute("src", randomImageSource11);

//Square
var randomNumber12 = Math.floor(Math.random() * 49) + 1;

var randomImageSource12 = "PostItSquare" + randomNumber12 + ".png";

document.querySelectorAll("img")[11].setAttribute("src", randomImageSource12);

// var randomNumber13 = Math.floor(Math.random() * 70) + 1;

// var randomImageSource13 = "PostItWide" + randomNumber13 + ".png";

// document.querySelectorAll("img")[12].setAttribute("src", randomImageSource13);

// //Tall

// var randomNumber14 = Math.floor(Math.random() * 70) + 1;

// var randomImageSource14 = "PostItTall" + randomNumber14 + ".png";

// document.querySelectorAll("img")[13].setAttribute("src", randomImageSource14);

//RefreshButton
const refreshButton = document.querySelector("#button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

const taller = document.querySelector("#tall");
const taller2 = document.querySelector("#tall2");
const taller3 = document.querySelector("#tall3");
const taller4 = document.querySelector("#tall4");
const taller5 = document.querySelector("#tall5");
const taller6 = document.querySelector("#tall6");
const taller7 = document.querySelector("#tall7");
const taller8 = document.querySelector("#tall8");
const taller9 = document.querySelector("#tall9");
const wider = document.querySelector("#wide");
const wider2 = document.querySelector("#wide2");
const wider3 = document.querySelector("#wide3");
const makeBigger = document.querySelector("#buttonSize");

// makeBigger.addEventListener("click", () => {
//   removeClass();
// });

function removeClassTall() {
  if (taller.classList.contains("postItPicturesTall")) {
    taller.classList.remove("postItPicturesTall");
    taller.classList.add("postItPicturesTaller");
  } else if (taller.classList.contains("postItPicturesTaller")) {
    taller.classList.remove("postItPicturesTaller");
    taller.classList.add("postItPicturesTall");
  }
}

function removeClassTall2() {
  if (taller2.classList.contains("postItPicturesTall")) {
    taller2.classList.remove("postItPicturesTall");
    taller2.classList.add("postItPicturesTaller");
  } else if (taller2.classList.contains("postItPicturesTaller")) {
    taller2.classList.remove("postItPicturesTaller");
    taller2.classList.add("postItPicturesTall");
  }
}
function removeClassTall3() {
  if (taller3.classList.contains("postItPicturesTall")) {
    taller3.classList.remove("postItPicturesTall");
    taller3.classList.add("postItPicturesTaller");
  } else if (taller3.classList.contains("postItPicturesTaller")) {
    taller3.classList.remove("postItPicturesTaller");
    taller3.classList.add("postItPicturesTall");
  }
}
function removeClassTall4() {
  if (taller4.classList.contains("postItPicturesTall")) {
    taller4.classList.remove("postItPicturesTall");
    taller4.classList.add("postItPicturesTaller");
  } else if (taller4.classList.contains("postItPicturesTaller")) {
    taller4.classList.remove("postItPicturesTaller");
    taller4.classList.add("postItPicturesTall");
  }
}

function removeClassTall5() {
  if (taller5.classList.contains("postItPicturesTall")) {
    taller5.classList.remove("postItPicturesTall");
    taller5.classList.add("postItPicturesTaller");
  } else if (taller5.classList.contains("postItPicturesTaller")) {
    taller5.classList.remove("postItPicturesTaller");
    taller5.classList.add("postItPicturesTall");
  }
}
function removeClassTall6() {
  if (taller6.classList.contains("postItPicturesTall")) {
    taller6.classList.remove("postItPicturesTall");
    taller6.classList.add("postItPicturesTaller");
  } else if (taller6.classList.contains("postItPicturesTaller")) {
    taller6.classList.remove("postItPicturesTaller");
    taller6.classList.add("postItPicturesTall");
  }
}
function removeClassTall7() {
  if (taller7.classList.contains("postItPicturesTall")) {
    taller7.classList.remove("postItPicturesTall");
    taller7.classList.add("postItPicturesTaller");
  } else if (taller7.classList.contains("postItPicturesTaller")) {
    taller7.classList.remove("postItPicturesTaller");
    taller7.classList.add("postItPicturesTall");
  }
}
function removeClassTall8() {
  if (taller8.classList.contains("postItPicturesTall")) {
    taller8.classList.remove("postItPicturesTall");
    taller8.classList.add("postItPicturesTaller");
  } else if (taller8.classList.contains("postItPicturesTaller")) {
    taller8.classList.remove("postItPicturesTaller");
    taller8.classList.add("postItPicturesTall");
  }
}
function removeClassTall9() {
  if (taller9.classList.contains("postItPicturesTall")) {
    taller9.classList.remove("postItPicturesTall");
    taller9.classList.add("postItPicturesTaller");
  } else if (taller9.classList.contains("postItPicturesTaller")) {
    taller9.classList.remove("postItPicturesTaller");
    taller9.classList.add("postItPicturesTall");
  }
}
function removeClassWide() {
  if (wider.classList.contains("postItPicturesWide")) {
    wider.classList.remove("postItPicturesWide");
    wider.classList.add("postItPicturesWider");
  } else if (wider.classList.contains("postItPicturesWider")) {
    wider.classList.remove("postItPicturesWider");
    wider.classList.add("postItPicturesWide");
  }
}
function removeClassWide2() {
  if (wider2.classList.contains("postItPicturesWide")) {
    wider2.classList.remove("postItPicturesWide");
    wider2.classList.add("postItPicturesWider");
  } else if (wider2.classList.contains("postItPicturesWider")) {
    wider2.classList.remove("postItPicturesWider");
    wider2.classList.add("postItPicturesWide");
  }
}
function removeClassWide3() {
  if (wider3.classList.contains("postItPicturesWide")) {
    wider3.classList.remove("postItPicturesWide");
    wider3.classList.add("postItPicturesWider");
  } else if (wider3.classList.contains("postItPicturesWider")) {
    wider3.classList.remove("postItPicturesWider");
    wider3.classList.add("postItPicturesWide");
  }
}

// function changeButton() {
//   if (makeBigger.classList.contains("buttonChange")) {
//     makeBigger.classList.remove("buttonChange");
//     makeBigger.classList.add("buttonAfter");
//   } else if (makeBigger.classList.contains("buttonAfter")) {
//     makeBigger.classList.remove("buttonAfter");
//     makeBigger.classList.add("buttonChange");
//   }
// }

// var sizeButton = document.getElementById("button");

// function change() {
//   // no ';' here
//   if (sizeButton.value == "art bigger") sizeButton.value = "art smaller";
//   else sizeButton.value = "art bigger";
// }

var btn = document.getElementById("buttonSize");

function change() {
  if (btn.innerText == "make smaller") {
    btn.innerText = "make larger";
  } else {
    btn.innerText = "make smaller";
  }
}
