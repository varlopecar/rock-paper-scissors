'use strict'

function playerSelection(){
const selection = console.log('Choose: Rock, Paper, Scissors')
    if(String(selection.toLowerCase()) === String('Rock'.toLowerCase())){
        console.log('Rock')
        selection = 1
    } else if(String(selection.toLowerCase()) === String('Paper'.toLowerCase())){
        console.log('Paper')
        selection = 2
    } else if(String(selection.toLowerCase()) === String('Scissors'.toLowerCase())){
        console.log('Scissors')
        selection = 3
    }
return selection
}

const selection = playerSelection()

function computerPlay(){
const randomNumber = Math.floor((Math.random()*3)+0)
    if(randomNumber === 0){
        return 'rock'
    } else if(randomNumber === 1){
        return 'paper'
    } else if(randomNumber === 2){
        return 'scissors'
    }
}
