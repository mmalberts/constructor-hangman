// contains a contstructor called Word that depends on the Letter constructor
// Word is used to create an object representing the current word the user is trying to guess
// Word should define the following:
//   - an array of new Letter objects representing the letters of the underlying word
//   - a function that returns a string representing the word. this should call the function on each letter object 
//     (from letter.js) that displays the character or an underscore and concatenate those together
//   - a function that takes a character as an argument and calls the guess function on each letter object 
//	   (the second function defined in letter.js)
// should only require letter.js

var inquirer = require("inquirer");
var Letter = require("./letter.js");

var Word = function(word) {
	this.word = word;
	this.letterArr = [];
	this.won = false;
	//takes each letter of the word, makes it a Letter object, and pushes each object to the array
	this.arrayGen = function() {
		for (var i = 0; i < word.length; i++) {
			var newLetter = new Letter(word[i]);
			this.letterArr.push(newLetter);
		};
	};
	this.stringGen = function() {
		// this.arrayGen();
		var wordString = "";
		for (var i = 0; i < this.letterArr.length; i++) {
			wordString += this.letterArr[i].display() + " ";
		};
		console.log("\n" + wordString + "\n");
		if (wordString.indexOf("_") === -1) {
			this.won = true;
		}
	};
	this.onGuess = function(guess) {
		// this.arrayGen();
		// var label;
		for (var i = 0; i < this.letterArr.length; i++) {
			this.letterArr[i].checkGuess(guess);
		};
		this.stringGen();
		// console.log("\n" + label + "\n");
	};
};

// * * * D E B U G G I N G * * *

// var newWord = new Word("patriarchy");
// console.log(newWord.word);
// newWord.arrayGen();
// console.log(newWord.letterArr);
// console.log(newWord.letterArr[0].letter);
// console.log(newWord.letterArr[0].secretWord);
// newWord.stringGen();

// var prompt = function() {
// 	inquirer.prompt([
// 	{
// 		name: "userguess",
// 		message: "Guess a letter"
// 	}
// 	]).then(function(response) {
// 		newWord.onGuess(response.userguess);
// 		for (var i = 0; i < newWord.letterArr.length; i++) {
// 			if (newWord.letterArr[i].guessed === false) {
// 				prompt();
// 			}
// 			else {
// 				console.log("YOU WIN!");
// 				return;
// 			};
// 		};
// 	});
// };

// newWord.arrayGen();
// prompt();

module.exports = Word;






