var inquirer = require("inquirer");
var Word = require("./Word.js");

var theWord = new Word();
console.log("Guess the Movie Title I'm thinking of:")

function playGame(misses) {
	if (misses > 5) {
		console.log(theWord.displayAlways() + "\n");
		console.log("Sorry, You Lost !!!")
	} else {
		console.log(theWord.display());
	    inquirer.prompt([{
			name: "entry",
			type: "input",
			message: "What letter do you guess?"
	    }]).then(function (aLetter) {
	    	if (aLetter.entry.length !== 1) {
		    	console.log("Invalid Entry ... Try again\n");
		   		playGame(misses);
	    	} else {
		    	if (theWord.contains(aLetter.entry)) {
	    			console.log("Yes, That's one of the letters\n");
		    		if (theWord.guessed()) {
						console.log(theWord.displayAlways() + "\n");
						console.log("Congratulations, You Win !!!")
		    		} else {
		    			playGame(misses);
		    		}
		    	} else {
	    			console.log("No, That's NOT one of the letters\n");
	    			misses++;
		   			playGame(misses);
		    	}
		    }
	    })
	}
}

playGame(0);