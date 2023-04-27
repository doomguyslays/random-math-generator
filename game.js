let secretNumber = Math.floor(Math.random() * 10) + 1; // generate random number between 1 and 10
let tries = 3; // player has three tries to guess the number

while (tries > 0) {
  let guess = parseInt(prompt("Guess the secret number (between 1 and 10)")); // prompt the player for a guess
  if (guess === secretNumber) { // if the player guessed correctly
    alert("Congratulations, you guessed the secret number!"); // display a congratulatory message
    break; // end the game
  } else { // if the player guessed incorrectly
    tries--; // decrement the number of tries
    alert("Sorry, that was incorrect. You have " + tries + " tries left."); // display the number of tries remaining
  }
}

if (tries === 0) { // if the player ran out of tries
  alert("Sorry, you ran out of tries. The secret number was " + secretNumber + "."); // display the secret number and a message of defeat
}
