'use strict'

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
        return console.log(`It's a draw`)

    } else if(playerSelection === "rock"){
        if(computerPlay === "paper") 
        return console.log('You lost')
        if(computerPlay === "scissors") 
        return console.log('You won')

    } else if(playerSelection === "paper"){
        if(computerPlay === "scissors") 
        return console.log('You lost')
        if(computerPlay === "rock") 
        return console.log("You won")

    } else if(playerSelection === "scissors"){
        if(computerPlay === "rock") 
        return console.log('You lost')
        if(computerPlay === "paper") 
        return console.log("You won")
    }
}

const playerSelection = "rock"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))