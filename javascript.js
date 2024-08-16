console.log("Hello World");

let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;
let winMessage = "";

function getComputerChoice() {
    let n = Math.random();

    if (n < (1/3)) {
        computerChoice = "rock";
        
    } else if (n < (2/3)) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    console.log(n);
    console.log(computerChoice);

    return(computerChoice)
}

console.log(getComputerChoice(computerChoice));

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

    return(humanChoice)
}

console.log(getHumanChoice(humanChoice));

function playRound(humanChoice, computerChoice) {
    let round = 1;
    let winner = "";
    // while (round <= 5){
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                winner = "Tie, play again";
            } else if (computerChoice === "paper") {
                winner = "You lose, paper beats rock.";
                round++;
            } else {
                winner = "You win, scissors beats paper.";
                round++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winner = "You win, paper beats rock.";
                round++;
            } else if (computerChoice === "paper") {
                winner = "Tie, play again";
            } else {
                winner = "You lose, scissors beats paper.";
                round++;
            }
        } else {
            if (computerChoice === "rock") {
                winner = "You lose, rock beats scissors.";
                round++;
            } else if (computerChoice === "paper") {
                winner = "You win, scissors beats paper";
                round++;
            } else {
                winner = "Tie, play again";
            }
        }
        console.log("Round "+round+". "+winner);
    }

    if (humanScore > computerScore) {
        winMessage="You win!"
    } else {
        winMessage="Computer wins."
    }
    console.log("Final score, player " + humanScore + ", computer " + computerScore + ". " + winMessage);

    // return winMessage
// }

console.log(playRound());