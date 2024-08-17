console.log("Hello World");

let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;
let winMessage = "";
let end = 0;

function getComputerChoice() {
    let n = Math.random();

    if (n < (1/3)) {
        computerChoice = "rock";
        
    } else if (n < (2/3)) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
}

getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
    let i = 0;
    while (i < 1){
        humanChoice = prompt("Pick rock, paper, or scissors.").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            i++;
        } else {
            alert ("Try again");
        }
    }
}

getHumanChoice();
console.log(humanChoice);

function playRound() {
    let winner = "";
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            winner = "Tie, play again";
        } else if (computerChoice === "paper") {
            winner = "You lose, paper beats rock.";
        } else {
            winner = "You win, rock beats scissors.";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "You win, paper beats rock.";
        } else if (computerChoice === "paper") {
            winner = "Tie, play again";
        } else {
            winner = "You lose, scissors beats paper.";
        }
    } else {
        if (computerChoice === "rock") {
            winner = "You lose, rock beats scissors.";
        } else if (computerChoice === "paper") {
            winner = "You win, scissors beats paper";
        } else {
            winner = "Tie, play again";
        }
    }
    return winner
}

// playRound();
console.log(playRound());


// console.log("Round "+round+". "+winner);

// if (round === 5){
//     end++;
// }

// if (end > 0){
//     if (humanScore > computerScore) {
//         winMessage="You win!"
//     } else {
//         winMessage="Computer wins."
//     }
// }

// console.log("Final score, player " + humanScore + ", computer " + computerScore + ". " + winMessage);

    // return winMessage
// }