//create the secretNumber
var secretNumber = 5;

//ask user to guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if the guess is correct
if (guess === secretNumber) {
  prompt("You got it right!!");
}

//check if the guess is high
else if (guess > secretNumber) {
  prompt("It too high, try again.");
}

//check if the guess is low
else {
  prompt("It too low, try again.");
}
