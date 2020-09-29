function letterGuesser() {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let randomNumberIndex = Math.floor(Math.random() * (alphabet.length + 1));

  let alphabetIndexLetter = alphabet[randomNumberIndex];

  let alphabetIndexLetterChoiceGuessAlert = prompt(`Your letter is ${alphabetIndexLetter}. Guess ${alphabetIndexLetter}'s index number`);

  let alphabetIndexGuess = parseInt(alphabetIndexLetterChoiceGuessAlert);

  if (alphabetIndexGuess == randomNumberIndex) {
    alert(`Your letter is ${alphabetIndexLetter}. You guessed ${alphabetIndexGuess}. That's correct. You're a genius at the alphabet!`);
  } else {
    alert(`Your letter is ${alphabetIndexLetter}. You guessed ${alphabetIndexGuess}. It is incorrect. You will have to re-learn the abc's. The index of ${alphabetIndexLetter} is actually ${randomNumberIndex}. Better luck next time!`);
  }


}

letterGuesser()