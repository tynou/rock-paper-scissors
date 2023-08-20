let scores = {"player": 0, "computer": 0};
const names = {"r": "rock", "p": "paper", "s": "scissors"};

let animStoppers = {};

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
            typeText(roundOutcome, "you lost!");
            typeText(roundText, `${names[playerChoice]} loses to ${names[computerChoice]}`);
            break;
        case 0:
            typeText(roundOutcome, "it's a tie!");
            typeText(roundText, `${names[playerChoice]} ties with ${names[computerChoice]}`);
            break;
        case 1:
            scores.player += 1;
            typeText(roundOutcome, "you won!");
            typeText(roundText, `${names[playerChoice]} defeats ${names[computerChoice]}`);
            break;
    }
    updateScore();
    
    if (scores.player === 5 || scores.computer === 5) {
        finishGame(scores.player === 5);
    }
};

const finishGame = (playerWon) => {
    typeText(endMessage, `you ${playerWon ? "won" : "lost"}!`);

    overlay.classList.add("active");
    modal.classList.add("active");
}

const startGame = () => {
    typeText(gameTitle, "rock | paper | scissors", 30);
    typeText(roundOutcome, "what is your turn?");

    roundText.textContent = "";

    scores.player = 0;
    scores.computer = 0;
    updateScore();

    overlay.classList.remove("active");
    modal.classList.remove("active");
};

const typeText = (element, text, interval=20) => {
    if (animStoppers[element]) {
        animStoppers[element]();
    }

    element.innerHTML = "";

    const onTick = () => {
        const span = document.createElement("span");
        span.setAttribute("class", `letter ${i % 2 === 0 ? "effect1" : "effect2"}`)
        span.innerText = text[i];
        element.appendChild(span);

        setTimeout(() => {span.classList.remove("effect1"); span.classList.remove("effect2")}, interval-10);

        i++
        if (i === text.length) {
            endTimer();
            return;
        }
    };

    const endTimer = () => {
        clearInterval(typewriterTimer);
        animStoppers[element] = null;
    };

    let i = 0;
    let typewriterTimer = setInterval(onTick, interval);

    animStoppers[element] = endTimer;
};

const gameTitle = document.querySelector(".game-title");
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