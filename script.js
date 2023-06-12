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
    playerChoice = playerChoice.toLowerCase();
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

// game - plays a 5 round game that keeps
// score an reports winner at the end
let GAMES_COUNT = 5;
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<GAMES_COUNT; i++) {
        let playerChoice = prompt("Make your choice!");
        roundResult = playRound(playerChoice, getComputerChoice());

        if (roundResult.substring(4,5) == "W") {
            playerScore++;
        }
        else if (roundResult.substring(4,5) == "L") {
            computerScore++;
        }
        else {

        }
        console.log(roundResult);
    }
    console.log(" - FINAL SCORE - ");
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
}

game();