'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'SUCCESS! 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guesses = 0;
let bestscore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! ❌';

    // Player wins
  } else if (guess === secretNumber) {
    guesses += 1;
    document.querySelector('.score').textContent = guesses;

    document.querySelector('.message').textContent = 'SUCCESS!! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (guesses < bestscore) {
      bestscore = guesses;
      document.querySelector('.bestscore').textContent = bestscore;
    }
    // Guess too high
  } else if (guess > secretNumber) {
    if (guesses < 20) {
      document.querySelector('.message').textContent = 'Too High! 🔻';
      guesses += 1;
      document.querySelector('.score').textContent = guesses;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!! 💥';
    }

    // GUess too low
  } else if (guess < secretNumber) {
    if (guesses < 20) {
      document.querySelector('.message').textContent = 'Too Low! 🔺';
      guesses += 1;
      document.querySelector('.score').textContent = guesses;
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE!! 💥';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  guesses = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = guesses;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
