function letterGuesser() {
  let letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let randomLetter = Math.floor(Math.random() * letterArray.length);

  let letter = letterArray[randomLetter];
  let guess = Number(
    prompt(`Your letter is ${letter}. Guess ${letter}'s index number.`)
  );

  if (guess === letterArray.indexOf(letter)) {
    alert("You're a genius at the alphabet.");
  } else {
    alert(
      `Incorrect you will have to re-learn the abc's. The index of ${letter} is actually ${letterArray.indexOf(
        letter
      )}.`
    );
  }
}

letterGuesser();
