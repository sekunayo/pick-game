'use strict';
let rollDiceButton = document.querySelector('.roll-dice');
let diceImage = document.querySelector('.dice-image');
let firstPlayer = document.querySelector('.player-1-container');
let secondPlayer = document.querySelector('.player-0-container');
let activePlayer = document.querySelector('.active-player');
let holdButton = document.querySelector('.Hold');
let newButton = document.querySelector('.new-game');
let currentScore = 0;
let scores = [0, 0];
let playerWithCurrentValue = 0;
let gameIsCurrentlyPlaying = true;

rollDiceButton.addEventListener('click', function () {
    diceImage.classList.remove('hidden');
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `images/dice-${dice}.png`;
    if (dice > 1) {
        currentScore += dice;
        document.querySelector(`.current-score-${playerWithCurrentValue}`).innerHTML = currentScore;
    } else {
        switchPlayer();
    }
})
holdButton.addEventListener('click', function () {
    if (gameIsCurrentlyPlaying) {
        scores[`${playerWithCurrentValue}`] += currentScore;
        document.querySelector(`.score-${playerWithCurrentValue}`).innerHTML = scores[`${playerWithCurrentValue}`];
        document.querySelector(`.current-score-${playerWithCurrentValue}`).innerHTML = 0;
        if (scores[`${playerWithCurrentValue}`] >= 100) {
            gameIsCurrentlyPlaying = false;
            diceImage.classList.add('hidden');
            document.querySelector(`.player-${playerWithCurrentValue}-container`).classList.add('winner-style');
            document.querySelector(`.player-${playerWithCurrentValue}-container`).classList.remove('active-player');
        } else {
            switchPlayer();
        }
    }
})
newButton.addEventListener('click', function () {
    window.location.reload();
    currentScore = 0;
})
let switchPlayer = function () {
    firstPlayer.classList.toggle('active-player');
    secondPlayer.classList.toggle('active-player');
    firstPlayer.classList.toggle('non-active-player');
    secondPlayer.classList.toggle('non-active-player');
    document.querySelector(`.current-score-${playerWithCurrentValue}`).innerHTML = 0;
    currentScore = 0;
    playerWithCurrentValue = playerWithCurrentValue === 0 ? 1 : 0;
}

//Modal functionality
let modal = document.querySelector('.modal');
let mainContainer = document.querySelector('.main-container');
window.addEventListener("resize", function () {
      remove();
})
window.addEventListener('DOMContentLoaded', function () {
     remove();
})
remove();
function remove(){
    if (window.outerWidth < 1280) {
        modal.style.display ="flex";
        mainContainer.style.display = "none";
      }
      else{
        modal.style.display ="none";
        mainContainer.style.display = "flex"; 
      }
}
