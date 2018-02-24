// contains constructor "Letter"
// Letter either displays a character or a placeholder depending on whether or not the user has guessed the letter
// Letter should define the following:
//   - a string value to store the underlying character for the letter
//   - a boolean value that stores whether that letter has been guessed yet
//   - a function that returns underlying characters if the letter has been guessed, or a placeholder if the letter has not been guessed
//   - a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// should not require any files

// var inquirer = require("inquirer");

var Letter = function(letter) {
	this.letter = letter;
	this.guessed = false;
	this.display = function() {
		if (this.letter === " ") {
			this.guessed = true;
		};
		if (!this.guessed) {
			return "_";
		}
		else {
			return this.letter;
		};
	};
	this.checkGuess = function(guess) {
		// console.log(guess);
		if (guess === this.letter) {
			this.guessed = true;
		};
	};
	// this.secretWord = "debug";
};

// * * * D E B U G G I N G * * *

// inquirer.prompt([
// {
// 	name: "response",
// 	message: "Guess a letter"
// }
// ]).then(function(response) {
// 	var newLetter = new Letter("a");
// 	newLetter.checkGuess(response.response);
// 	newLetter.display();
// });

module.exports = Letter;