'use strict'

const computerSelection = computerPlay()

function playerSelection(){
    const selection = prompt('Choose rock, paper or scissors')
    return selection
}

function computerPlay(){
const randomNumber = Math.floor((Math.random()*3)+0)
    if(randomNumber === 0){
        return "rock"
    } else if(randomNumber === 1){
        return "paper"
    } else if(randomNumber === 2){
        return "scissors"
    }
}

function playRound(playerSelection, computerPlay){
    if(playerSelection === computerPlay){
        return "tie"

    } else if(playerSelection === "rock"){
        if(computerPlay === "paper") 
        return "lost"
        if(computerPlay === "scissors") 
        return "won"

    } else if(playerSelection === "paper"){
        if(computerPlay === "scissors") 
        return "lost"
        if(computerPlay === "rock") 
        return "won"

    } else if(playerSelection === "scissors"){
        if(computerPlay === "rock") 
        return "lost"
        if(computerPlay === "paper") 
        return "won"
    }
}

// function game(){
//     for(let i=0; i<5; i++)
//     console.log(playRound(playerSelection(), computerPlay()))
// }

