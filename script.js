'use strict';
//My code 


let nmbr = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const changeTextContent = function (className, text) {
  document.querySelector(className).textContent = text;
};

const againFct = function () {
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  changeTextContent('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  changeTextContent('.score', score);
  changeTextContent('.number', '?');
  nmbr = Math.trunc(Math.random() * 20) + 1;
};

const btnFct = function () {
  const guess = Number(document.querySelector('.guess').value);
  let message;

  if (!guess) {
    message = 'NO NUMBER??';
  } else if (guess === nmbr) {
    message = 'nais :*';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    changeTextContent('.number', nmbr);
    changeTextContent('.highscore', highScore);
  } else if (guess > nmbr) {
    message = 'too high :(((';
    if (score) score--;
  } else if (guess < nmbr) {
    message = 'too low :((';
    if (score) score--;
  }

  if (!score) message = 'GAME OVER';

  changeTextContent('.score', score);
  changeTextContent('.message', message);
};

document.querySelector('.check').addEventListener('click', btnFct);
document.querySelector('.again').addEventListener('click', againFct);
