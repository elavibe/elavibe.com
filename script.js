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
const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
