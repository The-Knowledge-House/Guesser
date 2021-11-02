// function letterGuesser(){
//   let alphArr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//   let num1 = Math.floor(Math.random(alphArr))
//     const message = 'The number you received is ${num1}'
//     let guess = prompt("Guess the letter's index number: ");
//     if (guess >= NaN || 25) {
//       alert("You gotta learn your ABCs! The answer is: ${message}" );
//     }else{
//       alert("You're an ABCs wizard!")
//     }
//     return letterGuesser
//     }
//     console.log();

function letterGuesser(){
  let alphArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let indexOfletter = Math.floor(Math.random() * alphArr.length)
  let letter = alphArr[indexOfletter];

  let guess = prompt(`Guess ${letter}'s index number: `);
  if (isNaN(guess)){
    console.log("this is not a number");
  }else{
    console.log("this is a number");
    if (guess === indexOfletter) {
      alert("Correct answer!")
    } else {
      alert(`The correct index is ${indexOfletter}.`)
    }
  }


  console.log(guess)
  
}


letterGuesser()
