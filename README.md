# 🕹️ Tic-Tac-Toe Modern

A sleek, responsive Tic-Tac-Toe web application featuring a high-contrast dark theme and smooth game logic. Built with Vanilla JavaScript and Tailwind CSS.

## 🚀 Live Demo

Check out the game here: [[Link to the game](https://ashaaan.github.io/Tic_Tac_Toe_Game/)]

## ✨ Features

- **Modern UI**: Utilizes Tailwind's linear-gradient utilities and glassmorphism-inspired overlays.

- **Fully Responsive**: Perfectly playable on mobile, tablet, and desktop screens using a dynamic CSS Grid.

- **Win Detection**: Implements a pattern-matching algorithm to check for 8 possible winning combinations.

- **Smart State Management**: Prevents move overwriting by disabling clicked buttons and locking the board upon victory.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup.

- **Tailwind CSS**: Utility-first styling including custom gradients (#00b08b to #96c93d).

- **JavaScript (ES6)**: DOM manipulation, event delegation, and game state logic.

## 🧠 Technical Logic

The game uses a 1D array representation of the 3x3 grid. After every turn, the engine validates the board against the following winning matrix:

- **JavaScript**
  let winPatterns = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5]
  ];
- **Key Workflow**:
  Turn Toggle: Uses a boolean turnO to switch between Players X and O.

- **Validation**: Loops through winPatterns to see if the innerText of three specific buttons matches and is not empty.

- **UI Feedback**: When a winner is found, a hidden msg-container is revealed using Tailwind's hidden class toggle.

## Screenshots!

- **Desktop**:![App screenshots](screenshots/Screenshot%202026-02-03%20130348.png)
