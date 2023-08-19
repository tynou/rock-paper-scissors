// const getRandomChoice = () => {
//     return ["r", "p", "s"][Math.floor(Math.random() * 3)];
// }

// const processRound = (playerChoice, computerChoice) => {
//     const tieMessage = "It's a tie."

//     const outcomes = {
//         "r": {
//             "r": {"val": 0, "msg": tieMessage},
//             "p": {"val": -1, "msg": "You lose! Rock loses to paper("},
//             "s": {"val": 1, "msg": "You win! Rock wins scissors)"}
//         },

//         "p": {
//             "r": {"val": 1, "msg": "You win! Paper wins rock)"},
//             "p": {"val": 0, "msg": tieMessage},
//             "s": {"val": -1, "msg": "You lose! Paper loses to scissors("}
//         },

//         "s": {
//             "r": {"val": -1, "msg": "You lose! Scissors lose to rock("},
//             "p": {"val": 1, "msg": "You win! Scissors win paper)"},
//             "s": {"val": 0, "msg": tieMessage}
//         },
//     }

//     playerChoice = playerChoice.toLowerCase()[0];
//     computerChoice = computerChoice.toLowerCase()[0];

//     return outcomes[playerChoice][computerChoice];
// }

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

const choices = document.querySelectorAll(".choices button");
console.log(choices);

choices.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(element.className, event);
    })
})