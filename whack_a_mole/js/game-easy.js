window.onload = function() {
  const SCOREBOARD = document.querySelector('.score');
  const MOLES = document.querySelectorAll('.mole');
  const STARTBTN = document.getElementById('start_btn');
  let titleH1 = document.getElementById('title');
  let timeUp = false;
  let score = 0;
  let gameTime = 10000;
  let time;
  let mole;
  STARTBTN.addEventListener('click', function() {
    showBtnAnimation();
    startGame();
  }, false);

  function showBtnAnimation() {
    event.preventDefault();
    STARTBTN.classList.add('animate');
    setTimeout(() => {
      STARTBTN.classList.remove('animate');
      STARTBTN.classList.add('disappear');
    }, 700);
  }

  function startGame() {
    resetScoreAndTime();
    peep();
    setTimeout(() => {
      showTxt(titleH1, 'TIME UP!');
      showScore(SCOREBOARD, score);
      STARTBTN.innerText = 'Replay';
      STARTBTN.classList.remove('disappear');
      timeUp = true;
    }, gameTime);
  }

  function resetScoreAndTime() {
    showTxt(titleH1, 'WHACK-A-MOLE!');
    timeUp = false;
    score = 0;
    showScore(SCOREBOARD, score);
  }

  function peep() {
    time = getRandom(500, 1000);
    mole = getRandomMole(MOLES);
    comeOutAndStop(mole, time);
  }

  function comeOutAndStop(mole, time) {
    mole.classList.add('up');
    setTimeout(() => {
      mole.classList.remove('up');
      if (!timeUp) {
        peep();
      }
    }, time);
  }
  MOLES.forEach(mole => mole.addEventListener('click', function(e) {
    score += 1;
    showScore(SCOREBOARD, score);
    mole.classList.remove('up');
  }));
};

function getRandomMole(MOLES) {
  let lastMole;
  let newMole = getRandom(1, 6);
  while (newMole === lastMole) {
    newMole = getRandom(1, 6);
  }
  lastMole = newMole;
  return MOLES[newMole];
}

function showTxt(titleH1, txt) {
  titleH1.innerText = txt;
}

function showScore(SCOREBOARD, score) {
  SCOREBOARD.innerText = score;
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}