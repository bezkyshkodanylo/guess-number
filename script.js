let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkNumber() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const message = document.getElementById("message");
  const hint = document.getElementById("hint");
  const attemptsDisplay = document.getElementById("attempts");
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100";
    message.className = "message error";
    hint.textContent = "";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = `Correct! You found it in ${attempts} attempt${attempts > 1 ? "s" : ""}!`;
    message.className = "message success";
    hint.textContent = "";
    guessInput.disabled = true;
    document.querySelector(".btn-check").disabled = true;
  } else if (guess > randomNumber) {
    message.textContent = "Too high";
    message.className = "message info";
    hint.textContent = `The number is between 1 and ${guess - 1}`;
  } else {
    message.textContent = "Too low";
    message.className = "message info";
    hint.textContent = `The number is between ${guess + 1} and 100`;
  }

  if (attempts >= maxAttempts && guess !== randomNumber) {
    message.textContent = `Game Over! The number was ${randomNumber}`;
    message.className = "message error";
    guessInput.disabled = true;
    document.querySelector(".btn-check").disabled = true;
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const hint = document.getElementById("hint");
  const attemptsDisplay = document.getElementById("attempts");
  const checkBtn = document.querySelector(".btn-check");
  guessInput.value = "";
  guessInput.disabled = false;
  guessInput.focus();
  message.textContent = "";
  message.className = "message";
  hint.textContent = "";
  attemptsDisplay.textContent = "0";
  checkBtn.disabled = false;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    checkNumber();
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    checkNumber();
  }
}
