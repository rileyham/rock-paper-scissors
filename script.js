const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const announcement = document.getElementById("announcement");

let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

// gitComputerChoice - randomly return rock, paper, or scissors
function getComputerChoice() {
    let result = Math.random() * 3;
    let resultString;

    if (result<1) {
        resultString = "rock";
    } 
    else if (result<2 && result>=1) {
        resultString = "paper";
    }
    else {
        resultString = "scissors";
    }
    return resultString;
}

// playRound - take in player and computer selection 
// and return a string announcing the result
function playRound(playerChoice,computerChoice) {
    let outputString;
    if(playerChoice == "rock") {
        if(computerChoice == "rock") {
            outputString = "You Tied! You both played rock.";
        }
        else if(computerChoice == "scissors") {
            outputString = "You Win! Rock beats scissors.";
        }
        else {
            outputString = "You Lose! Paper beats rock.";
        }
    }
    else if(playerChoice == "scissors") {
        if(computerChoice == "rock") {
            outputString = "You Lose! Rock beats scissors.";
        }
        else if(computerChoice == "scissors") {
            outputString = "You Tied! You both played scissors.";
        }
        else {
            outputString = "You Win! Scissors beats paper.";            
        }
    }
    else {
        if(computerChoice == "rock") {
            outputString = "You Win! Paper beats rock.";
        }
        else if(computerChoice == "scissors") {
            outputString = "You Lose! Scissors beats paper.";
        }
        else {
            outputString = "You Tied! You both played paper.";            
        }
    }
    return outputString;
}

// game - plays 1 round of RPS
function game(playerChoice){
    computerChoice = getComputerChoice();

    roundResult = playRound(playerChoice, computerChoice);

    if (roundResult.substring(4,5) == "W") {
        playerScore++;
    }
    else if (roundResult.substring(4,5) == "L") {
        computerScore++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    announcement.textContent = roundResult;

    if (playerScore >=  MAX_SCORE && computerScore < MAX_SCORE ) {
        announcement.textContent = "---You Won the Game!---";
    }
    else if(computerScore >= MAX_SCORE && playerScore < MAX_SCORE){
        announcement.textContent = "---You Lost the Game.---";
    }
}

rock.addEventListener("click", function() {
    game("rock");
    });
paper.addEventListener("click", function() {
    game("paper")
    });
scissors.addEventListener("click", function() {
    game("scissors")
    });
