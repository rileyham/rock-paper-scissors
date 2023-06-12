// gitComputerChoice - randomly return rock, paper, or scissors
function getComputerChoice() {
    let result = Math.random() * 3;
    let resultString;

    if (result<1) {
        resultString = "Rock";
    } 
    else if (result<2 && result>=1) {
        resultString = "Paper";
    }
    else {
        resultString = "Scissors";
    }
    return resultString;
}

// playRound take in player and computer selection 
// and return a string announcing the result
function playRound(playerChoice,computerChoice) {
    let outputString;
    if(playerChoice =="Rock") {
        if(computerChoice == "Rock") {
            outputString = "You Tied! You both played rock.";
        }
        else if(computerChoice == "Scissors") {
            outputString = "You Win! Rock beats scissors.";
        }
        else {
            outputString = "You Lose! Paper beats rock.";
        }
    }
    else if(playerChoice == "Scissors") {
        if(computerChoice == "Rock") {
            outputString = "You Lose! Rock beats scissors.";
        }
        else if(computerChoice == "Scissors") {
            outputString = "You Tied! You both played scissors.";
        }
        else {
            outputString = "You Win! Scissors beats paper.";            
        }
    }
    else {
        if(computerChoice == "Rock") {
            outputString = "You Win! Paper beats rock.";
        }
        else if(computerChoice == "Scissors") {
            outputString = "You Lose! Scissors beats paper.";
        }
        else {
            outputString = "You Tied! You both played paper.";            
        }
    }
    return outputString;
}
