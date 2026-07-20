// =================================
// GAME VARIABLES
// =================================

let secretNumber;
let maxNumber;
let maxAttempts;
let attempts = 0;
let gameStarted = false;


// =================================
// START GAME
// =================================

function startGame(level, button) {

    gameStarted = true;


    // Remove active style from all buttons

    document
        .querySelectorAll(".difficulty-button")
        .forEach(function (difficultyButton) {

            difficultyButton.classList.remove("active");

        });


    // Add active style to selected button

    if (button) {

        button.classList.add("active");

    }


    // EASY MODE

    if (level === "easy") {

        maxNumber = 10;

        maxAttempts = Infinity;

        document.getElementById("level").textContent =
            "Easy Mode";

        document.getElementById("instructions").textContent =
            "Guess a number between 1 and 10.";

    }


    // MEDIUM MODE

    else if (level === "medium") {

        maxNumber = 50;

        maxAttempts = 5;

        document.getElementById("level").textContent =
            "Medium Mode";

        document.getElementById("instructions").textContent =
            "Guess a number between 1 and 50.";

    }


    // HARD MODE

    else if (level === "hard") {

        maxNumber = 100;

        maxAttempts = 10;

        document.getElementById("level").textContent =
            "Hard Mode";

        document.getElementById("instructions").textContent =
            "Guess a number between 1 and 100.";

    }


    // Generate secret number

    secretNumber =
        Math.floor(Math.random() * maxNumber) + 1;


    // Reset attempts

    attempts = 0;


    // Show message

    document.getElementById("message").textContent =
        "Game started! Make your guess.";


    // Show attempts

    if (maxAttempts === Infinity) {

        document.getElementById("attempts").textContent =
            "Remaining attempts: Unlimited";

    }

    else {

        document.getElementById("attempts").textContent =
            `Remaining attempts: ${maxAttempts}`;

    }


    // Clear input

    document.getElementById("guessInput").value = "";

}


// =================================
// CHECK GUESS
// =================================

function checkGuess() {


    // Get input

    const input =
        document.getElementById("guessInput");


    const guess =
        Number(input.value);


    // IMPORTANT:
    // If the game has not started, automatically start Easy Mode

    if (!gameStarted) {

        startGame(
            "easy",
            document.querySelector(".difficulty-button")
        );

    }


    // Check empty input

    // if (input.value === "") {

    //     document.getElementById("message").textContent =
    //         "Please enter a number.";

    //     return;

    // }


    // Check range

    if (
        guess < 1 ||
        guess > maxNumber
    ) {

        document.getElementById("message").textContent =
            `Please enter a number between 1 and ${maxNumber}.`;

        return;

    }


    // Increase attempts

    attempts++;


    // Check guess

    if (guess < secretNumber) {

        document.getElementById("message").textContent =
            "Too low! Try again.";

    }

    else if (guess > secretNumber) {

        document.getElementById("message").textContent =
            "Too high! Try again.";

    }

    else {

        document.getElementById("message").textContent =
            `🎉 Correct! You guessed it in ${attempts} attempts!`;

        gameStarted = false;

    }


    // Update attempts

    if (maxAttempts === Infinity) {

        document.getElementById("attempts").textContent =
            "Remaining attempts: Unlimited";

    }

    else {

        const remainingAttempts =
            maxAttempts - attempts;


        document.getElementById("attempts").textContent =
            `Remaining attempts: ${remainingAttempts}`;


        // Game over

        if (
            guess !== secretNumber &&
            remainingAttempts === 0
        ) {

            document.getElementById("message").textContent =
                `😢 Game Over! The number was ${secretNumber}.`;

            gameStarted = false;

        }

    }


    // Clear input

    input.value = "";

}


// =================================
// NEW GAME
// =================================

function newGame() {

    secretNumber = undefined;

    maxNumber = undefined;

    maxAttempts = undefined;

    attempts = 0;

    gameStarted = false;


    document.getElementById("level").textContent =
        "Choose a difficulty";


    document.getElementById("instructions").textContent =
        "Choose Easy, Medium, or Hard to start.";


    document.getElementById("message").textContent =
        "Choose a difficulty level to start the game.";


    document.getElementById("attempts").textContent =
        "Remaining attempts: 0";


    document.getElementById("guessInput").value = "";


    document
        .querySelectorAll(".difficulty-button")
        .forEach(function (button) {

            button.classList.remove("active");

        });

}