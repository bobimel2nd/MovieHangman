var Letter = function(theLetter) {
	this.Letter = theLetter;
	this.Guessed = ("abcdefghijklmnopqrstuvwxyz".indexOf(theLetter.toLowerCase()) === -1);

	this.display = function() {
		return (this.Guessed? this.Letter: "_") + "  ";
	};

	this.displayAlways = function() {
		return this.Letter + "  ";
	};

	this.isLetter = function(theLetter) {
		var test = (this.Letter.toLowerCase() === theLetter.toLowerCase());
		if (test) this.Guessed = true;
		return test;
	};
};

module.exports = Letter;
