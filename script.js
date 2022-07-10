// game score 
let playerScore = 0;
let computerScore = 0;

// UI for buttons
const rckBtn = document.getElementById('Rock');
rckBtn.addEventListener('click', () => playRound('Rock'))
const pprBtn = document.getElementById('Paper');
pprBtn.addEventListener('click', () => playRound('Paper'))
const sciBtn = document.getElementById('Scissors');
sciBtn.addEventListener('click', () => playRound('Scissors'))

// function that randomly picks rock, paper, or scissors
function computerPlay() {
let options = ['Rock', 'Paper', 'Scissors'];
return options[Math.floor(Math.random() * options.length)]
}

// disables buttons after game is over
function disableButtons() {
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

// function that keeps score and returns results
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';

if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')) {

    playerScore += 1;
    result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
        
    if (playerScore == 5) {
        result = 'You won the game! Reload the page to start again!';
        disableButtons()
    }
} 
else if ( 
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        computerScore += 1;
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';

    if (computerScore == 5) {
        result = 'You lost the game! Reload the page to start again!';
        disableButtons()
    }
} 
else {
        result = 'It\'s a tie!'
    }

    document.getElementById('result').textContent = result;
    document.getElementById('totalResult').textContent = ' Player Score: ' + playerScore + ' Computer Score: ' + computerScore;
    return;
}
