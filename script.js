'use strict';

// selecting the scores elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('btn--new');
const btnHold = document.querySelector('btn--hold');

// starting coditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;

    // 3. chech for the rolled 1
    if (dice !== 1) {
        // Add the dice to the current score
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {
        // Switch to next player
        
    }

})
