console.log("Hello World");

let computerChoice = "";
let humanChoice = "";

function getComputerChoice() {
    let n = Math.random();

    if (n < (1/3)) {
        computerChoice = "Rock";
        
    } else if (n < (2/3)) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Sissors"
    }

    console.log(n);
    console.log(computerChoice);

    return(computerChoice)
}

console.log(getComputerChoice(computerChoice));

function getHumanChoice() {
    let i = 0;
    while (i < 1){
        humanChoice = prompt("Pick rock, paper, or sissors.");
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "sissors") {
            i++;
        } else {
            alert ("Try again");
        }
    }

    return(humanChoice)
}

console.log(getHumanChoice(humanChoice));