// const game = () => {
//     let score = 0;

//     for (let round = 1; round <= 5; round++) {
//         const playerChoice = prompt("What is your turn? (rock/paper/scissors)");
//         const computerChoice = getRandomChoice();

//         const outcome = processRound(playerChoice, computerChoice);
//         score += outcome.val;
        
//         alert(outcome.msg)
//     }

//     const message = score < 0 ? "You lost!" : (score > 0 ? "You won!" : "It's a tie! -_-");
//     console.log(message);
//     alert(message);
// }
// game();

let scores = {"player": 0, "computer": 0};
const names = {"r": "rock", "p": "paper", "s": "scissors"};

const getRandomChoice = () => {
    return ["r", "p", "s"][Math.floor(Math.random() * 3)];
};

const updateScore = () => {
    playerScore.textContent = scores.player;
    computerScore.textContent = scores.computer;
}

const playRound = (playerChoice) => {
    const computerChoice = getRandomChoice();

    const outcome = {
        "r": {"r": 0, "p": -1, "s": 1},
        "p": {"r": 1, "p": 0, "s": -1},
        "s": {"r": -1, "p": 1, "s": 0},
    }[playerChoice][computerChoice];

    switch (outcome) {
        case -1:
            scores.computer += 1;
            roundOutcome.textContent = "you lost!"
            roundText.textContent = `${names[playerChoice]} loses to ${names[computerChoice]}`
            break;
        case 0:
            roundOutcome.textContent = "it's a tie!"
            roundText.textContent = `${names[playerChoice]} ties with ${names[computerChoice]}`
            break;
        case 1:
            scores.player += 1;
            roundOutcome.textContent = "you won!"
            roundText.textContent = `${names[playerChoice]} defeats ${names[computerChoice]}`
            break;
    }
    updateScore();
    
    if (scores.player === 5 || scores.computer === 5) {
        finishGame(scores.player === 5);
    }
};

const finishGame = (playerWon) => {
    endMessage.textContent = `you ${playerWon ? "won" : "lost"}!`

    overlay.classList.add("active");
    modal.classList.add("active");
}

const startGame = () => {
    roundOutcome.textContent = "what is your turn?";
    roundText.textContent = "";

    scores.player = 0;
    scores.computer = 0;
    updateScore();

    overlay.classList.remove("active");
    modal.classList.remove("active");
};

const restart = () => {

};

const playerScore = document.querySelector(".player-score .score-count");
const computerScore = document.querySelector(".computer-score .score-count");
const roundOutcome = document.querySelector(".round-outcome");
const roundText = document.querySelector(".round-text");
const restartButton = document.querySelector(".restart-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const endMessage = document.querySelector(".end-message");
const choices = document.querySelectorAll(".choices button");

choices.forEach((element) => {
    element.addEventListener("click", (event) => {
        playRound(element.className[0]);
    })
});

restartButton.addEventListener("click", (event) => {
    startGame();
});

startGame();