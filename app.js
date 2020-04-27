let userScore = 0;
let computerScore = 0;
// DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// click handler for rock button
rock_div.addEventListener('click', function () {
    game("r");
})
// click handler for paper button
paper_div.addEventListener('click', function () {
    game("p");
})
// click handler for scissors button
scissors_div.addEventListener('click', function () {
    game("s");
})

// handles one game
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        // user wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // tie
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
        // user loses
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
    }
}

// handles a user win
function win(userChoice, computerChoice) {
    // update score
    userScore++;
    userScore_span.innerHTML = userScore;
    // update message
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${toWord(userChoice)}${smallUser} beats ${toWord(computerChoice)}${smallComp}. You win!`;
    // add green glow
    document.getElementById(userChoice).classList.add("green-glow");
    // remove glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow");
    }, 500);
}

// handles a user loss
function lose(userChoice, computerChoice) {
    // update score
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    // update message
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${toWord(userChoice)}${smallUser} loses to ${toWord(computerChoice)}${smallComp}. You lose.`;
    // add red glow
    document.getElementById(userChoice).classList.add("red-glow");
    // remove glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow");
    }, 500);
}

// handles a tie
function tie(userChoice, computerChoice) {
    // update message
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${toWord(userChoice)}${smallUser} equals ${toWord(computerChoice)}${smallComp}. It's a tie.`;
    // add grey glow
    document.getElementById(userChoice).classList.add("grey-glow");
    // remove glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("grey-glow");
    }, 500);
}

function toWord(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else if (letter === "s") {
        return "Scissors";
    }
}

// randomly chooses the computer's choice
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

