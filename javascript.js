console.log("Hello World");

let computerChoice = "";

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
