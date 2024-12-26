
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1 and 6
// we are generating a random number between 0 and 0.99999 
// and then we are multiplying the number by 6, inorder to change
// it to between 0 and 5.99999. Then we are rounding that number down
// to the nearest whole number, so it becomes between 0 and 5.
// And finally, we are changing that range from between 0 and 5 to 
// between 1 and 6 by simply adding 1 to the number.

var randromDiceImage = "dice" + randomNumber1 + ".png";// dice1.png - dice6.png
var randdomImageSource = "images/" + randromDiceImage;// images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randdomImageSource);

// -------------------------------------------------------------
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randdomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randdomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins✌️ !"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆 !"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}