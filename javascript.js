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
// console.log(computerChoice);

// function getHumanChoice() {

    // let i = 0;
    // while (i < 1){
    //     humanChoice = prompt("Pick rock, paper, or scissors.").toLowerCase();
    //     if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    //         i++;
    //     } else {
    //         alert ("Try again");
    //     }
    // }
// }

// getHumanChoice();
// console.log(humanChoice);

function playRound(winner) {
    getComputerChoice();
    console.log(computerChoice);
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
    results.textContent = "Score = Human: " + humanScore + "; Computer: " + computerScore;
    console.log("Human score = " + humanScore)
    console.log("Computer score = " + computerScore)

    selection.textContent = "You picked: " + humanChoice + "; computer picked: " + computerChoice;

    if (humanScore+computerScore === 5){
        const announceWinner = document.createElement("div");
        announceWinner.classList.add("winner");
        announceWinner.textContent = "TEST";
        container.appendChild(announceWinner);
        humanScore = 0;
        computerScore = 0;
    }

    return winner
}

// console.log(playRound());


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

    const rock = document.createElement("button");
    rock.classList.add("button");
    rock.textContent = "Rock";
    rock.addEventListener("click", pickedRock);
    container.appendChild(rock);

    const paper = document.createElement("button");
    paper.classList.add("button");
    paper.textContent = "Paper";
    paper.addEventListener("click", pickedPaper);
    container.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.classList.add("button");
    scissors.textContent = "Scissors";
    scissors.addEventListener("click", pickedScissors);
    container.appendChild(scissors);

    const selection = document.createElement("div");
    container.appendChild(selection);

    const results = document.createElement("div");
    results.classList.add("results");
    results.textContent = "Score = Human: " + humanScore + "; Computer: " + computerScore;
    container.appendChild(results);
 
const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", playRound)
    });

function pickedRock() {
    humanChoice = "rock";
    console.log(humanChoice);
}

function pickedPaper() {
    humanChoice = "paper";
    console.log(humanChoice);
}

function pickedScissors() {
    humanChoice = "scissors";
    console.log(humanChoice);
}

