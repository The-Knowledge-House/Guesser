function letterGuesser() {
	let alphaGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbGuess =  Math.floor(Math.random() * alphaGuess.length);
	
let playerGuess = parseInt(prompt(`Your letter is: ${alphaGuess[numbGuess]} , guess the index?`));

if (playerGuess == numbGuess) {
	alert("You're a genius at the alphabet!!");
} else {
	alert(`Wrong! You need to learn your ABC's.  The correct index is ${numbGuess}`);
	}
}


letterGuesser();





