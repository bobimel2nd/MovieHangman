var Movies = require("./Movies.json");
var Letter = require("./Letter");

function PickNumber(Low, High) {
	return Math.floor(Math.random()*(High-Low+1) + Low)
};

var Word = function() {
	this.Word = Movies[PickNumber(0, Movies.length-1)];
	this.allLetters = [];
	this.Word.split('').forEach((aLetter) => this.allLetters.push(new Letter(aLetter)))

	this.contains = function(aLetter) {
		var test = false;
		this.allLetters.forEach((thisLetter) => test |= thisLetter.isLetter(aLetter));
		return test;
	};

	this.guessed = function() {
		var test = true;
		this.allLetters.forEach((thisLetter) => test &= thisLetter.Guessed);
		return test;
	};

	this.display = function() {
		var display = ""
		this.allLetters.forEach((thisLetter) => display += thisLetter.display());
		return display;
	}

	this.displayAlways = function() {
		var display = ""
		this.allLetters.forEach((thisLetter) => display += thisLetter.displayAlways());
		return display;
	}

};

// Exporting the Movie constructor which we will use in main.js
module.exports = Word;
