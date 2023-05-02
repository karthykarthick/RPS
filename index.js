const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultsDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userChoice,computerChoice,result

choices.forEach(choices => choices.addEventListener('click',(e)=>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
randomGenrator()
getResult()
}))

function randomGenrator(){
    const randomNum = Math.floor(Math.random()*3)+1

    if(randomNum == 1){
        computerChoice = 'rock'
    }
    if(randomNum == 2){
        computerChoice = 'paper'
    }
    if(randomNum == 3){
        computerChoice = 'sciccors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'It is a draw'
    }

    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }

    if(computerChoice === 'rock' && userChoice === 'sciccors'){
        result = 'you lost!'
    }

    if(computerChoice === 'paper' && userChoice === 'sciccors'){
        result = 'you win'
    }

    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
    }

    if(computerChoice === 'sciccors' && userChoice === 'rock'){
        result = 'you win'
    }

    if(computerChoice === 'sciccors' && userChoice === 'paper'){
        result = 'you lost!'
    }

    resultsDisplay.innerHTML = result
}