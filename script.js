'use strict';

// const computerSelection = computerPlay();

function playerSelection(){
    let selection = '';
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener('click', function() {
            selection = button.id;
        }
    ));
    return console.log(selection);
}

console.log(playerSelection());

// function computerPlay(){
// const randomNumber = Math.floor((Math.random()*3)+0)
//     if(randomNumber === 0){
//         return 0
//     } else if(randomNumber === 1){
//         return 1
//     } else if(randomNumber === 2){
//         return 2
//     }
// }

// function playRound(playerSelection, computerPlay){
//     if(playerSelection === computerPlay){
//         return "tie"

//     } else if(playerSelection === "rock"){
//         if(computerPlay === "paper") 
//         return "lost"
//         if(computerPlay === "scissors") 
//         return "won"

//     } else if(playerSelection === "paper"){
//         if(computerPlay === "scissors") 
//         return "lost"
//         if(computerPlay === "rock") 
//         return "won"

//     } else if(playerSelection === "scissors"){
//         if(computerPlay === "rock") 
//         return "lost"
//         if(computerPlay === "paper") 
//         return "won"
//     }
// }

// function game(){
//     for(let i=0; i<5; i++)
//     console.log(playRound(playerSelection(), computerPlay()))
// }

