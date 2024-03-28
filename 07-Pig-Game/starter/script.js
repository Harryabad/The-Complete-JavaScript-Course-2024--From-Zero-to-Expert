'use strict';

// selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //# to get id, can do document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // if active player is 0 return 1, else return 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    //toggle adds if not there or removes if is there
}


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if(playing){
    
    // 1. Generate random dice rom
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if(dice !== 1){
        // add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //current0El.textContent = currentScore; // TODO: change later
    } else {
        // switch player
        switchPlayer();

    }
}
});

btnHold.addEventListener('click', function (){
    if(playing){

        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 
        
        //2. Check if player's score >= 100
        if(scores[activePlayer] >= 100) {
            //Player x wins
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        } else{
            //Switch Player
            switchPlayer();
            
        }
        }
    });