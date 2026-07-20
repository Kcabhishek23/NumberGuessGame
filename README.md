# 🎯 Number Guess Game

<!--
# creates a large heading.
One # is the biggest heading in Markdown.
-->

A simple and interactive number guessing game built with HTML, CSS, and JavaScript.

<!--
Normal text can be written directly.
You do not need to use <p> tags like HTML.
-->

---

## 🎮 Live Demo

<!--
## creates a second-level heading.
-->

You can play the game here:

👉 [Play Number Guess Game](https://kcabhishek23.github.io/NumberGuessGame/)

<!--
[Text](URL) creates a clickable link.

Example:
[Google](https://www.google.com)
-->

---

## 📸 UI Design

![Number Guess Game UI](images/game-ui.png)

<!--
![Alt Text](Image Path)
is used to display an image.

Your project should look like this:

NumberGuessGame/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    └── game-ui.png

If your image has a different name, change the path.
-->

---

## 🎯 How the Game Works

The game has three different difficulty levels:

### 🟢 Easy Mode

- Number range: **1 to 10**
- Attempts: **Unlimited**

### 🟡 Medium Mode

- Number range: **1 to 50**
- Attempts: **5**

### 🔴 Hard Mode

- Number range: **1 to 100**
- Attempts: **10**

<!--
### creates a smaller heading.

- creates a bullet point.

**text** makes text bold.
-->

The game gives feedback after every guess:

- **Too low** — your guess is smaller than the secret number.
- **Too high** — your guess is bigger than the secret number.
- **Correct** — you found the secret number.

---

## 🛠️ Technologies Used

### HTML

HTML was used to create the structure of the website, including:

- Navigation bar
- Game title
- Difficulty buttons
- Number input
- Submit button
- Game messages
- New Game button

### CSS

CSS was used to design the user interface.

The design includes:

- Dark background
- Gradient buttons
- Hover effects
- Difficulty selector
- Responsive layout
- Custom spacing and typography

### JavaScript

JavaScript was used to create the game logic.

JavaScript handles:

- Generating a random secret number
- Selecting difficulty levels
- Checking the user's guess
- Showing "Too high" or "Too low"
- Counting attempts
- Showing remaining attempts
- Detecting the correct answer
- Restarting the game

---

## 🧠 What I Learned

While building this project, I learned how to:

- Build a website using HTML, CSS, and JavaScript.
- Connect JavaScript with HTML elements.
- Use functions to organize code.
- Use conditional statements.
- Generate random numbers.
- Track game attempts using variables.
- Add interactions to buttons.
- Use Git and GitHub to manage a project.
- Deploy a website using GitHub Pages.

---

## 📁 Project Structure

```text
NumberGuessGame/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    └── game-ui.png
