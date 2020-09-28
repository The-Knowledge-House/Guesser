function letterGuesser(){
    const arrOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let randomNum = Math.floor(Math.random() * arrOfLetters.length);

    let userGuess = Number(prompt(`Guess the index of the letter ${arrOfLetters[randomNum]}`));

    if (arrOfLetters[userGuess] !== arrOfLetters[randomNum]){
        alert(`Now you don't know your abc's. The index of ${arrOfLetters[randomNum]} is ${randomNum}`);
    } else {
        alert("you are a genius with the alphabet");
    }
}

letterGuesser()