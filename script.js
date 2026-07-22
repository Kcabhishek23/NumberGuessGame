/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const body = document.body;


/* =========================================
   APPLY THEME
========================================= */

function applyTheme(isDay) {

    if (isDay) {

        body.classList.add("day-mode");

        themeIcon.textContent = "☾";
        themeText.textContent = "NIGHT MODE";

    } else {

        body.classList.remove("day-mode");

        themeIcon.textContent = "☀";
        themeText.textContent = "DAY MODE";
    }
}


/* =========================================
   THEME BUTTON CLICK
========================================= */

themeToggle.addEventListener("click", () => {

    const switchingToDay =
        !body.classList.contains("day-mode");


    /* Button animation */

    themeToggle.classList.remove("pulse");

    void themeToggle.offsetWidth;

    themeToggle.classList.add("pulse");


    /* Icon animation */

    themeIcon.classList.remove("flip");

    void themeIcon.offsetWidth;

    themeIcon.classList.add("flip");


    /* Page animation */

    body.classList.remove("theme-changing");

    void body.offsetWidth;

    body.classList.add("theme-changing");


    /* Apply the new theme */

    applyTheme(switchingToDay);
});


/* =========================================
   START IN NIGHT MODE
========================================= */

applyTheme(false);


/* =========================================
   NUMBER GUESS GAME
========================================= */

const DIFFICULTIES = {

    easy: {
        min: 1,
        max: 10,
        attempts: Infinity
    },

    medium: {
        min: 1,
        max: 50,
        attempts: 10
    },

    hard: {
        min: 1,
        max: 100,
        attempts: 7
    }

};


let currentLevel = "easy";

let targetNumber = null;

let attemptsLeft = Infinity;

let gameOver = false;


/* =========================================
   DOM ELEMENTS
========================================= */

const levelEl =
    document.getElementById("level");

const instructionsEl =
    document.getElementById("instructions");

const guessInput =
    document.getElementById("guessInput");

const messageEl =
    document.getElementById("message");

const attemptsEl =
    document.getElementById("attempts");


/* =========================================
   START GAME
========================================= */

function startGame(level, btn) {

    currentLevel = level;

    gameOver = false;


    /* Remove active class from all buttons */

    document
        .querySelectorAll(".difficulty-button")
        .forEach(button => {

            button.classList.remove("active");

        });


    /* Add active class to selected button */

    if (btn) {

        btn.classList.add("active");

    }


    const {
        min,
        max,
        attempts
    } = DIFFICULTIES[level];


    /* Generate random number */

    targetNumber =
        Math.floor(
            Math.random() * (max - min + 1)
        ) + min;


    attemptsLeft = attempts;


    /* Update UI */

    levelEl.textContent =
        `${level.charAt(0).toUpperCase() + level.slice(1)} Mode`;


    instructionsEl.textContent =
        `Guess a number between ${min} and ${max}.`;


    messageEl.textContent =
        "Game started! Make your guess.";


    attemptsEl.textContent =
        `Remaining attempts: ${
            attempts === Infinity
                ? "Unlimited"
                : attempts
        }`;


    guessInput.value = "";

    guessInput.focus();
}


/* =========================================
   CHECK GUESS
========================================= */

function checkGuess() {

    if (gameOver) {

        messageEl.textContent =
            "Round over — start a new game to keep playing.";

        return;
    }


    const raw =
        guessInput.value;


    const guess =
        Number(raw);


    /* Validate input */

    if (
        raw === "" ||
        Number.isNaN(guess)
    ) {

        messageEl.textContent =
            "Please enter a valid number.";

        return;
    }


    /* Correct guess */

    if (guess === targetNumber) {

        messageEl.textContent =
            `Correct! The number was ${targetNumber}.`;

        attemptsEl.textContent =
            "Remaining attempts: Game over";

        gameOver = true;

        return;
    }


    /* Decrease attempts */

    if (attemptsLeft !== Infinity) {

        attemptsLeft--;

    }


    /* No attempts left */

    if (attemptsLeft === 0) {

        messageEl.textContent =
            `Out of attempts! The number was ${targetNumber}.`;

        attemptsEl.textContent =
            "Remaining attempts: 0";

        gameOver = true;

        return;
    }


    /* Hint */

    if (guess < targetNumber) {

        messageEl.textContent =
            "Too low, try again!";

    } else {

        messageEl.textContent =
            "Too high, try again!";

    }


    /* Update attempts */

    attemptsEl.textContent =
        `Remaining attempts: ${
            attemptsLeft === Infinity
                ? "Unlimited"
                : attemptsLeft
        }`;


    guessInput.value = "";

    guessInput.focus();
}


/* =========================================
   NEW GAME
========================================= */

function newGame() {

    startGame(
        currentLevel,

        document.querySelector(
            ".difficulty-button.active"
        )
    );
}


/* =========================================
   ENTER KEY
========================================= */

guessInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            checkGuess();

        }

    }
);


/* =========================================
   START FIRST GAME
========================================= */

startGame(
    "easy",

    document.querySelector(
        ".difficulty-button.active"
    )
);
