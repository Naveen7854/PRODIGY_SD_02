let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    
    if (isNaN(userGuess)) {
        feedback.innerHTML = "Please enter a valid number!";
        feedback.style.color = "red"; // Invalid input color
        return;
    }

    attempts++;

    const difference = Math.abs(userGuess - randomNumber); // Calculate the absolute difference

    if (userGuess > randomNumber) {
        if (difference <= 5) {
            feedback.innerHTML = "Too close! But still too high!";
            feedback.style.color = "blue"; // Too close feedback
        } else {
            feedback.innerHTML = "Too high! Try again.";
            feedback.style.color = "red"; // Normal feedback
        }
    } else if (userGuess < randomNumber) {
        if (difference <= 5) {
            feedback.innerHTML = "Too close! But still too low!";
            feedback.style.color = "blue"; // Too close feedback
        } else {
            feedback.innerHTML = "Too low! Try again.";
            feedback.style.color = "red"; // Normal feedback
        }
    } else {
        feedback.innerHTML = `Congratulations! You guessed it right! The number was ${randomNumber}.`;
        feedback.style.color = "green"; // Correct guess feedback
        attemptsDisplay.innerHTML = `It took you ${attempts} attempts.`;
        disableGame();
    }

    document.getElementById('guess').value = ''; // Clear input after each guess
}

function disableGame() {
    document.getElementById('guess').disabled = true;
    document.querySelector('.submit-btn').disabled = true;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('attempts').innerHTML = '';
    document.getElementById('guess').disabled = false;
    document.querySelector('.submit-btn').disabled = false;
    document.getElementById('guess').value = '';
}
