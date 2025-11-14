# Number Guessing Game

A small, friendly Number Guessing Game built with plain HTML, CSS and JavaScript.

The player tries to guess a randomly generated integer between 1 and 100. After each guess the game displays feedback: "Too low", "Too high", or "Correct!" and counts attempts.

---

## Features

- Random number generated at page load.
- Simple, responsive UI with clear instructions.
- Immediate feedback for each guess (too low / too high / correct).
- Input validation and attempt counter.

---

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Project structure

index.html        # Main HTML file (game UI)
index.js          # Game logic and DOM handling
styles.css        # Styling for the game
README.md         # Original README
README_corrected.md # This corrected README (replace README.md with this file if desired)

---

## How to run

No build tools or package managers are required — this is a static web page. Open `index.html` in your browser:

Windows PowerShell example (run from the project folder):

```powershell
Start-Process .\index.html
```

Or just double-click `index.html` in File Explorer.

## Usage

1. Enter a number between 1 and 100 in the input field.
2. Click the "OK" button (or press Enter if implemented).
3. The message area will tell you if your guess is too low, too high, or correct. Attempts are counted.

After you guess correctly the button will be disabled — refresh the page to play again, or add a "Play again" button if you'd like a better flow.

---

## License & Credits

- Use freely for learning and small demo projects. If you publish or redistribute, please include credit.
- Created by Fidel Castro Omuya.
  