# Blackjack Game

This project is a simple Blackjack game implemented with HTML and JavaScript. The game randomly generates two numbers, calculates their sum, and provides basic game logic to determine whether the user should draw another card, win, or lose based on the sum.

## Live Demo

You can view and play the game live on GitHub Pages [here](https://ry-f3.github.io/Black-Jack/)

## Features

- **Random Number Generation**: Generates two random numbers between 1 and 11.
- **Basic Blackjack Logic**: Determines the game state based on the sum of the numbers:
  - Draw another card if the sum is less than 21.
  - Declare "Blackjack!" if the sum is exactly 21.
  - Declare "You're out of the game!" if the sum exceeds 21.
- **Reset Functionality**: Resets the game state and displays default values when needed.

## Code Overview

### `startGame` Function

The `startGame` function initiates the game by generating two random numbers and calculating their sum. It then determines if the sum is even or odd, updates the game state, and reflects these changes in the UI.

```javascript
function startGame() {
    let reset = default_value(); // Initializes variables, though not used effectively
    let num1 = Math.floor(Math.random() * 11) + 1; // Generates a random number between 1 and 11
    let num2 = Math.floor(Math.random() * 11) + 1;
    let sum = num1 + num2;

    // Determines if the sum is even or odd
    const assignSum = (num1) => {
        const isSumEven = num1 % 2 === 0;
        return isSumEven ? 'even' : 'odd';
    }

    console.log(assignSum(num1)); // Logs whether the number is even or odd

    // Message to display based on the sum
    let message = "";
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
    } else {
        message = "You're out of the game!";
        if (sum >= 21) {
           resetGame(); // Resets the game if the sum is 21 or more
        }
    }

    // Updates the UI elements with the current game state
    let messageEl = document.getElementById("message-el");
    let sumEl = document.getElementById("sum-el");
    let cardEl = document.getElementById("card-el");

    messageEl.innerHTML = message;
    sumEl.innerHTML = "Sum: " + sum;
    cardEl.textContent = "Cards: " + num1 + " & " + num2;
}
