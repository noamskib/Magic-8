let userName = prompt('name', '');
userName ? alert(`Hello ${userName}!`) : alert('Hello!');

let userQuestion = prompt('question', '');

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''

if (randomNumber === 0) {
  eightBall = 'It is certain'
} else if (randomNumber === 1){
  eightBall = 'It is decidedly so'
} else if (randomNumber === 2){
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 3){
  eightBall = 'Cannot predict now'
} else if (randomNumber === 4){
  eightBall = 'It is decidedly so'
} else if (randomNumber === 5){
  eightBall = 'Do not count on it'
} else if (randomNumber === 6){
  eightBall = 'My sources say no'
} else if (randomNumber === 7){
  eightBall = 'Outlook not so good'
} else if (randomNumber === 8){
  eightBall = 'Signs point to yes'
}

alert(eightBall);
console.log(`${userName} asks: ${userQuestion}? \n8-Ball Says: ${eightBall}.`);
