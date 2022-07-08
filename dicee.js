var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "dice" + randomNum1 + ".png";
var randomImagesSource = "images/" + randomDiceImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImagesSource2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesSource2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🏆🏆🏆 Play 1 wins! 🎉";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "🎉 Play 2 wins! 🏆🏆🏆";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
