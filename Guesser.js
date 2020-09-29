function guessTheLetter(){
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let random = Math.floor(Math.random() * letters.length);
    let pick = prompt(`Guess the index number of ${letters[random]}`);
    console.log(pick);
    let result = Number.parseInt(pick);
    if (result === random){
        alert("They're a genius at the alphabet");
    } else if (Number.isNaN(result)){
        alert("You must enter results");
    } else if( result !== random){
        alert(`You need to learn your ABCs again. The answer is ${random}.`);
    }
}
guessTheLetter();
