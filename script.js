/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const body = document.body;

function applyTheme(isDay) {
    if (isDay) {
        body.classList.add('day-mode');
        themeToggle.classList.add('reversed');
        themeIcon.textContent = '☾';
        themeText.textContent = 'NIGHT MODE';
    } else {
        body.classList.remove('day-mode');
        themeToggle.classList.remove('reversed');
        themeIcon.textContent = '☀';
        themeText.textContent = 'DAY MODE';
    }
}

themeToggle.addEventListener('click', () => {
    const switchingToDay = !body.classList.contains('day-mode');

    // restart the button "pulse" animation
    themeToggle.classList.remove('pulse');
    void themeToggle.offsetWidth; // force reflow so the animation can replay
    themeToggle.classList.add('pulse');

    // restart the icon "flip" animation
    themeIcon.classList.remove('flip');
    void themeIcon.offsetWidth;
    themeIcon.classList.add('flip');

    // restart the page-content fade/slide animation
    body.classList.remove('theme-changing');
    void body.offsetWidth;
    body.classList.add('theme-changing');

    applyTheme(switchingToDay);
});

// starts in night mode by default, matching the initial dark background
applyTheme(false);

/* =========================================
   NUMBER GUESS GAME
========================================= */

const DIFFICULTIES = {
    easy: { min: 1, max: 10, attempts: Infinity },
    medium: { min: 1, max: 50, attempts: 10 },
    hard: { min: 1, max: 100, attempts: 7 }
};

let currentLevel = 'easy';
let targetNumber = null;
let attemptsLeft = Infinity;
let gameOver = false;

const levelEl = document.getElementById('level');
const instructionsEl = document.getElementById('instructions');
const guessInput = document.getElementById('guessInput');
const messageEl = document.getElementById('message');
const attemptsEl = document.getElementById('attempts');

function startGame(level, btn) {
    currentLevel = level;
    gameOver = false;

    document.querySelectorAll('.difficulty-button').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const { min, max, attempts } = DIFFICULTIES[level];
    targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attemptsLeft = attempts;

    levelEl.textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} Mode`;
    instructionsEl.textContent = `Guess a number between ${min} and ${max}.`;
    messageEl.textContent = 'Game started! Make your guess.';
    attemptsEl.textContent = `Remaining attempts: ${attempts === Infinity ? 'Unlimited' : attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function checkGuess() {
    if (gameOver) {
        messageEl.textContent = 'Round over — start a new game to keep playing.';
        return;
    }

    const raw = guessInput.value;
    const guess = Number(raw);

    if (raw === '' || Number.isNaN(guess)) {
        messageEl.textContent = 'Please enter a valid number.';
        return;
    }

    if (guess === targetNumber) {
        messageEl.textContent = `🎉 Correct! The number was ${targetNumber}.`;
        attemptsEl.textContent = 'Remaining attempts: Game over';
        gameOver = true;
        return;
    }

    if (attemptsLeft !== Infinity) {
        attemptsLeft--;
    }

    if (attemptsLeft === 0) {
        messageEl.textContent = `Out of attempts! The number was ${targetNumber}.`;
        attemptsEl.textContent = 'Remaining attempts: 0';
        gameOver = true;
        return;
    }

    messageEl.textContent = guess < targetNumber ? 'Too low, try again!' : 'Too high, try again!';
    attemptsEl.textContent = `Remaining attempts: ${attemptsLeft === Infinity ? 'Unlimited' : attemptsLeft}`;
    guessInput.value = '';
    guessInput.focus();
}

function newGame() {
    startGame(currentLevel, document.querySelector('.difficulty-button.active'));
}

guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkGuess();
});

// kick off the first round on page load
startGame('easy', document.querySelector('.difficulty-button.active'));
