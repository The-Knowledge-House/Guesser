function letterGuesser(){
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    let randomAlpha = Math.floor(Math.random() * alpha.length)

    let input = prompt(`Your letter is ${alpha[randomAlpha]}. Guess ${alpha[randomAlpha]}'s index number`);
    let newAlpha = document.getElementById("alpha")
    if(parseInt(input) === randomAlpha){
        alert("You're a genius at the alphabet!");
          
         newAlpha.innerText = `Nice! Your letter is : ${alpha[randomAlpha]} = ${randomAlpha}`;
    }else{
        alert(`Sorry, you will have to re-learn the abc's. The index of ${alpha[randomAlpha]} is ${randomAlpha}`);
        newAlpha.innerText = `Your letter is : ${alpha[randomAlpha]} = ${randomAlpha}
        TRY AGAIN , LOSER. `;


    }
}

letterGuesser();





