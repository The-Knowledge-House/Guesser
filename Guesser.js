"use strict";

function letterGuesser() {
	// array to hold the alphabet characters
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	// use Math.floor and Math.Random to generate a random number
	// the length of alphabet array
	const randomNumber = Math.floor(Math.random() * alphabet.length);

	// select the alphabet letter correlating to the random number
	// using randomNumber as a index
	const letter = alphabet[randomNumber];

	// if statement to check if the number enter is correct
	const guessNumber = Number(
		prompt(`Your letter is ${letter}. Guess ${letter}'s index number`),
	);

	if (guessNumber === randomNumber) {
		alert(`You are a genius at the alphabet`);
	} else {
		alert(
			`You need to re-learn the alphabet. The index of ${letter} is actually ${randomNumber}`,
		);
	}
}

letterGuesser();
