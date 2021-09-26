function letterGuesser() {
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let randomLetter = arr[Math.floor(Math.random() * arr.length)]
    let randomIndex = arr.indexOf(randomLetter)
    let userResponse = parseInt(prompt("Your letter is " + randomLetter + ". But, what do you think is the index number of this letter?"))

    if (userResponse == randomIndex) {
        return alert("You are a genius at the alphabet")
    }
    else if (userResponse != randomIndex) {
        return alert("You need to learn your ABC's. The actual index number of the letter is " + randomIndex)
    }
}
letterGuesser()