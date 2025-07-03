let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    let userWin = false;

    if (userChoice === computerChoice) {
        result = "It's a tie! 😐";
    } else if (
        (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
        result = "You win! 🎉";
        userScore++;
        userWin = true;
        playSound("win-sound");
    } else {
        result = "Computer wins! 🤖";
        computerScore++;
        playSound("lose-sound");
    }

    document.getElementById("result").innerText = result;
    document.getElementById("user-choice").innerText = `You chose: ${emoji(userChoice)}`;
    document.getElementById("computer-choice").innerText = `Computer chose: ${emoji(computerChoice)}`;
    document.getElementById("score").innerText = `Score: You ${userScore} - ${computerScore} Computer`;

    applyEffect(userWin);
    playSound("click-sound");
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("result").innerText = "Make your move!";
    document.getElementById("user-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
    document.getElementById("score").innerText = "Score: You 0 - 0 Computer";
}

function emoji(choice) {
    return {
        "rock": "✊ Rock",
        "paper": "✋ Paper",
        "scissors": "✌️ Scissors",
        "lizard": "🦎 Lizard",
        "spock": "🖖 Spock"
    }[choice];
}

function applyEffect(userWin) {
    const resultElement = document.getElementById("result");
    resultElement.classList.remove("winner", "loser");

    setTimeout(() => {
        resultElement.classList.add(userWin ? "winner" : "loser");
    }, 100);
}

function playSound(id) {
    document.getElementById(id).play();
}
