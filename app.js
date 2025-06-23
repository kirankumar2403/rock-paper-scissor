let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

// Display this if choices matched
function draw() {
    let msg = document.querySelector(".msgBox");
    msg.innerText = 'Draw! Try Again!';
    msg.style.backgroundColor = "#364652";
}

// To display winner i.e. user or computer will get one point.
const showWinner = (userWin, userChoice, compChoice) => {
    let msg = document.querySelector(".msgBox");
    msg.style.backgroundColor = userWin ? "green" : "red";
    if (userWin) {
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
    }
}

// Generate computer's choice randomly
function genCompChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}

// Add event listeners to the choice elements
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

// Complete playGame logic to call showWinner
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = false; // Default to false
        // Determine winner based on choices
        if (userChoice === "rock") {
            userWin = compChoice === "scissor"; // Rock beats Scissor
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats Rock
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper"; // Scissor beats Paper
        }
        showWinner(userWin, userChoice, compChoice);
    }
}