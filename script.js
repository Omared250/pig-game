'use strict';

// selecting the scores elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// starting coditions

let scores, currentScore, activePLayer, playing;

const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePLayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

const switchPLayer = () => {
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePLayer = activePLayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');    
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;

        // 3. chech for the rolled 1
        if (dice !== 1) {
            // Add the dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePLayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPLayer();   
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
            // 1. Add current score to active player's score
        scores[activePLayer] += currentScore;
        document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer]
    
        // 2. Check if player's score is >= 100
        if (scores[activePLayer] >= 20) {
            // finish the game
            playing = false;

            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePLayer}`).classList.add('player--winner')

            document.querySelector(`.player--${activePLayer}`).classList.remove('player--active')
        } else {
            // Switch the player
            switchPLayer();
        }
    }
})

btnNew.addEventListener('click', init)
