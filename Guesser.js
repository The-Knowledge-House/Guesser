const letterGuesser = () => {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let randomLetter = Math.floor(Math.random() * (alphabet.length));
    let guessIndex = Number(prompt(`You received the letter ${alphabet[randomLetter]}. Guess what index this letter is! \n(HINT: alphabet starts at index 0)`));

    // check if the input equals the answer, return alert response
    (alphabet[guessIndex] === alphabet[randomLetter]) ? alert("YEAHHHHHHHHHHHHHHHHHHH. YOU GOT IT.") :
        alert(`Incorrect. You guessed ${guessIndex}, but the index of ${alphabet[randomLetter]} is actually ${randomLetter}`);

    // give player option to play again
    const button = document.querySelector('#reload');
    button.addEventListener('click', () => {
        location.reload();
    })
};

letterGuesser();