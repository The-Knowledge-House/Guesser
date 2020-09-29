function letterGuesser() {
  let letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let randNum = Math.floor(Math.random() * letterArr.length);

  let userInput = Number(prompt(`Please type what index number you think the letter ${letterArr[randNum]} is `));

  if (letterArr[userInput] !== letterArr[randNum]) {
    alert(`Man you telling me you still ain't learn your ABC's? The index of ${letterArr[randNum]} is ${randNum} fool`);
  } else {
    alert("You're a darn tootin genuis!");
  }
}

letterGuesser()