// // 1. create random number between 1-6
// // 2. make the random number to select "dice"+ random randomNumber1
// // 3. assign pictur to "diceLeft".
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceChoiceLeft = "dice" + randomNumber1 + ".png";
var diceChoiceRight = "dice" + randomNumber2 + ".png";
document.getElementsByClassName("diceLeft")[0].setAttribute("src", diceChoiceLeft);
document.getElementsByClassName("diceRight")[0].setAttribute("src", diceChoiceRight);


// use conditional to
// if player 1 dice is bigger, than it won.
// change titel to "winner is player 1"
// if it equals no one wins
// change the title to "its a draw"
// otherwise player 2 won
// than chane titel to "winner is player 2"

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
