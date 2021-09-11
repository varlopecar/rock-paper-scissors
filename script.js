'use strict';

const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelectorAll('.btn')
const choices = Array.from(choicesDisplay)
const choicesForComputer = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    const userChoice = e.target.id;
    const computerChoice = choicesForComputer[Math.floor(Math.random() * choicesForComputer.length)];
    getResults(userChoice, computerChoice)
    console.log(computerChoice)
}

choices.forEach(choice =>{
    choice.addEventListener('click', handleClick)
})

const getResults = (userChoice, computerChoice) => {
    switch(userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.textContent = `You chose ${userChoice} and the computer choses ${computerChoice}, YOU WIN!`
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.textContent = `You chose ${userChoice} and the computer choses ${computerChoice}, YOU LOSE!`
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.textContent = `You chose ${userChoice} and the computer choses ${computerChoice}, YOU LOSE!`
            break
    }
}