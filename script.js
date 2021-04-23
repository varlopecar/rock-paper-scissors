'use strict'

function selectionPlayer{
const selection = prompt('Choose: 1-Rock, 2-Paper, 3-Scissors')
switch (selection){
    case 1:
        return 'rock'
        break
    case 2:
        return 'paper'
        break
    case 3:
        return 'scissors'
        break
}
}


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
