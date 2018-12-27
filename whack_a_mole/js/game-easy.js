window.onload = function() {
  const SCOREBORAD = document.querySelector('.score');
  const MOLES = document.querySelectorAll('.mole');
  const STARTBTN = document.getElementById('start_btn');
  let titleH1 = document.getElementById('title');
  let lastMole;
  let timeUp = false;
  let score = 0;
  let gameTime = 10000;
  let moleStay;
  STARTBTN.addEventListener('click', function() {
    showBtnAnimation();
    startGame();
  }, false);

  function showBtnAnimation() {
    event.preventDefault();
    STARTBTN.classList.add('animate');
    setTimeout(() => {
      STARTBTN.classList.remove('animate');
      STARTBTN.style.display = 'none';
    }, 700);
  }

  function startGame() {
    resetScoreAndTime();
    peep();
    setTimeout(() => {
      titleH1.innerText = 'TIME UP!';
      ScoreBoard.innerText = score;
      StartBtn.innerText = 'Replay';
      StartBtn.style.display = 'inline-block';
      timeUp = true;
      clearTimeout(moleStay);
    }, gameTime)
  }

  function resetScoreAndTime() {
    titleH1.innerText = 'WHACK-A-MOLE!';
    timeUp = false;
    score = 0;
    ScoreBoard.innerText = score;
  }

  function peep() {
    if (!timeUp) {
      clearTimeout(moleStay);
      const TIME = getRandom(500, 1000);
      const MOLE = getRandomMole(Moles);
      comeOutAndStop(MOLE, TIME);
    }
  }

  function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRandomMole(Moles) {
    let newMole = getRandom(1, 6);
    while (newMole === lastMole) {
      lastMole = getRandom(1, 6);
    }
    lastMole = lastMole;
    return Moles[newMole];
  }

  function comeOutAndStop(mole, time) {
    if (!timeUp) {
      mole.classList.add('up');
      moleStay = setTimeout(function() {
        mole.classList.remove('up');
        peep();
      }, time);
    }
  }
  Moles.forEach(MOLE => MOLE.addEventListener('click', function(e) {
    MOLE.classList.remove('up');
    score += 1;
    ScoreBoard.innerText = score;
    peep();
  }));
};