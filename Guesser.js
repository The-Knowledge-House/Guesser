function letterGuesser() {
  const randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let randomNum = Math.floor(Math.random() * randomLetter.length);

  let userGuess = Number(prompt(`Guess the letter's index number ${randomLetter[randomNum]}`));
  if (randomLetter[userGuess] !== randomLetter[randomNum]) {
    alert(`Incorrect, you will have to re-learn the abc's. The index of ${randomLetter[randomNum]} is ${randomNum}`);
  } else {
    alert('You definitely know the alphabet!');
  }
}

letterGuesser();