'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const getGuessValue = () => {
    return document.querySelector('.guess').value;
}

const setGuessValue = (guessValue) => {
    document.querySelector('.guess').value = guessValue;
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const displayNumber = (number) => {
    document.querySelector('.number').textContent = number;
}

const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
}

const displayHighScore = (highScore) => {
    document.querySelector('.highscore').textContent = highScore;
}

const setWidthNumber = (property) => {
    document.querySelector('.number').style.width = property;
}

const setBodyBackground = (property) => {
    document.querySelector('body').style.backgroundColor = property;
}


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(getGuessValue());

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayNumber(secretNumber);
        setWidthNumber('30rem');
        displayMessage('Correct Number!');
        setBodyBackground('#60b347');

        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            --score;
            displayScore(score);
        } else {
            displayMessage('You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = generateSecretNumber();
    displayNumber('?');
    setWidthNumber('15rem');
    displayMessage('Start guessing...');
    setBodyBackground('#222');
    displayScore(score);
    setGuessValue('');
})

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}