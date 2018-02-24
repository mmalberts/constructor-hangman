// this file contains the logic for the course of the game, which depends on word.js
// randomly selects a word and use the Word constructor to store it
// prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArr = ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING"];
var atIndex;
var guessWord;
var newWord;
var guesses;

inquirer.prompt([
{
	type: "confirm",
	message: "Want to play hangman?",
	name: "play"
}
]).then(function(response) {
	if (response.play) {
		playGame();
	}
	else {
		return;
	};
});

var playGame = function() {
	guesses = 15;
	atIndex = Math.floor(Math.random() * wordArr.length);
	guessWord = wordArr[atIndex];
	newWord = new Word(guessWord);
	newWord.arrayGen();
	newWord.stringGen();
	printGuesses();
	prompt();
};

var printGuesses = function() {
	console.log("\nGuesses remaining: " + guesses + "\n");
}

var playAgain = function() {
	inquirer.prompt([
	{
		type: "confirm",
		message: "Do you want to play again?",
		name: "again"
	}
	]).then(function(response) {
		if (response.again) {
			playGame();
		}
		else {
			return;
		}
	})
}

var prompt = function() {
	inquirer.prompt([
	{
		name: "userguess",
		message: "Guess a letter"
	}
	]).then(function(response) {
		var guess = response.userguess.toUpperCase();
		newWord.onGuess(guess);
		guesses--;
		printGuesses();
		if (guesses === 0) {
			console.log("\nYou lose!\n");
			playAgain();
		}
		else if (newWord.won) {
			console.log("\nYou win!\n");	
			playAgain();
		}
		else {
			prompt();
		};
	});
};








