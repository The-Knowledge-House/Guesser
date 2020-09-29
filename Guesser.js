function guessTheLetter(){
    let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let randomNum = Math.floor(Math.random() * alphabets.length);
    let guessNum = prompt(`Guess the index number of ${alphabets[randomNum]}`);
    console.log(guessNum);
    let result = Number.parseInt(guessNum);
    if (result === randomNum){
        alert("They're a genius at the alphabet");
    } else if (Number.isNaN(result)){
        alert("You must enter results");
    } else if( result !== randomNum){
        alert(`You need to learn your ABCs again. The answer is ${randomNum}.`);
    }
}

guessTheLetter();