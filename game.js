let gameNum = 52;
let userNum = prompt("Enter your number");
while(userNum != gameNum){
    userNum = prompt("you guess the wrong number; guess again")
}

swal({
    title: "GAME SCORE",
    text: "YOU WIN THE GAME",
    timer: 9000
  });