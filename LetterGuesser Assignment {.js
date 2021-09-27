function letterGuesser() {
    // this is the generated random letters from the alphabet with index from 0 to 24
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];    
    let ranAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    let letter_guesser = prompt(' Your letter is:', ranAlphabet, '. Guess the letters index number.');
    console.log(letter_guesser);
    
    let alert = ('You are a genius')
    let alert2 = ('You need to learn your ABCs')
    if (letterGuesser = ranAlphabet) {
        console.log(alert)
    } else {
        console.log(alert2)
    }
}
