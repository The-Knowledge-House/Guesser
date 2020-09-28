{
  function letterGuesser() {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const randomNum = Math.floor(Math.random() * alphabet.length);
    const letter = alphabet[randomNum];
    let guess = prompt(
      `Your letter is ${letter}. Guess ${letter}'s index number.`
    );
    if (guess == randomNum) {
      document.querySelector(".result").innerHTML =
        "Whoa! You're like some sort of a ABC genuis!";
    } else {
      document.querySelector(
        ".result"
      ).innerHTML = `You lose! Looks like you need to practice your ABCs. The index of ${letter} is ${randomNum}.`;
    }
  }
}
