

const button = document.querySelector("#button")

const letterGuesser = () => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  const index = Math.floor(Math.random() * alphabet.length)
  const letter = alphabet[index]
  const guess = parseInt(prompt(`Your letter is ${letter}. Guess ${letter}'s index number.`))
  if (guess === index) {
    alert("You definitely know the alphabet!")
  } else {
    alert(`incorrect, you will have to re-learn the abc's. The index of ${letter} is actually ${index}.`)
  }
}

button.addEventListener("click", () => {
  letterGuesser();
})
