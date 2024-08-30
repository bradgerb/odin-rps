console.log("Hello World");

let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;

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

// getComputerChoice();
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

// getHumanChoice();
console.log(humanChoice);

function playRound(winner) {
    // let winner = "";
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            winner = "Tie, play again";
        } else if (computerChoice === "paper") {
            winner = "You lose, paper beats rock.";
            computerScore++;
        } else {
            winner = "You win, rock beats scissors.";
            humanScore++
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "You win, paper beats rock.";
            humanScore++
        } else if (computerChoice === "paper") {
            winner = "Tie, play again";
        } else {
            winner = "You lose, scissors beats paper.";
            computerScore++
        }
    } else {
        if (computerChoice === "rock") {
            winner = "You lose, rock beats scissors.";
            computerScore++
        } else if (computerChoice === "paper") {
            winner = "You win, scissors beats paper";
            humanScore++
        } else {
            winner = "Tie, play again";
        }
    }
    return winner
}

// console.log(playRound());
console.log("Human score = " + humanScore)
console.log("Computer score = " + computerScore)

// function playGame() {
//     let round = 0;
//     while (round < 5) {
//         getHumanChoice();
//         getComputerChoice();
//         console.log(playRound());
//         console.log("Human score = " + humanScore)
//         console.log("Computer score = " + computerScore)
//         round = humanScore + computerScore;
//     }
//     if (round = 5) {
//         if (computerScore > humanScore) {
//             console.log ("Game over, you lose.")
//         } else {
//             console.log ("Game over, you win!")
//         }
//     }
// }

// playGame();

const container = document.querySelector(".container");

    const buttons = document.createElement("div");

        const rock = document.createElement("button");
        rock.classList.add("button");
        rock.textContent = "Rock";
        buttons.appendChild(rock);

        const paper = document.createElement("button");
        paper.classList.add("button");
        paper.textContent = "Paper";
        buttons.appendChild(paper);

        const scissors = document.createElement("button");
        scissors.classList.add("button");
        scissors.textContent = "Scissors";
        buttons.appendChild(scissors);

    container.appendChild(buttons);
