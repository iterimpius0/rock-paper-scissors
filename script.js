function getcomputerChoice(compSelection) {
    let numberChoice = Math.floor(Math.random()*3);
    if (numberChoice==0) return 'rock';
    else if (numberChoice==1) return 'paper';
    else if (numberChoice==2) return 'scissors';
}

function gameRound(computerSelection,playerSelection) {
    if (computerSelection==playerSelection) return 'Tie!'
    else if (computerSelection=='rock' && playerSelection=='paper' ||
            computerSelection=='paper' && playerSelection=='scissors'||
            computerSelection=='scissors' && playerSelection=='rock') return 'Player wins!'
    else if (playerSelection=='rock' && computerSelection=='paper' ||
    playerSelection=='paper' && computerSelection=='scissors'||
    playerSelection=='scissors' && computerSelection=='rock') return 'Computer wins!'
}

    for (let i=0; i<5; i++){
        let playerSelection = prompt('Rock, Paper, Scissors')
        let computerSelection = getcomputerChoice();
        gameRound(computerSelection,playerSelection);
        alert('Computer chose ' + computerSelection + ' and you chose ' + playerSelection + '. ' + gameRound(computerSelection,playerSelection));
    }



