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
  /**
   * 初始化设置.
   */
  function resetScoreAndTime() {
    titleH1.innerText = 'WHACK-A-MOLE!';
    timeUp = false;
    score = 0;
    ScoreBoard.innerText = score;
  }
  /**
   * 出洞.
   */
  function peep() {
    if (!timeUp) {
      clearTimeout(moleStay);
      const TIME = getRandom(500, 1000);
      const MOLE = getRandomMole(Moles);
      comeOutAndStop(MOLE, TIME);
    }
  }
  /**
   * 随机生成地鼠出洞的停留时间. 该时间其实是[min, max]间的随机数.
   *
   * @param min 随机数的下界.
   * @param max 随机数的上界.
   * @returns {number}
   */
  function randomTime(min, max) {
    // TODO: 写生成随机数的逻辑，
    return 0;
  }
  /**
   * 随机选择地鼠钻出的地洞，如果与上一个是相同地洞，则重新选择一个地洞.
   *
   * @param holes
   * @returns {*}
   */
  function randomHole(holes) {
    // TODO: 写地鼠随机选择钻出地洞的逻辑，如果与上一个是相同地洞，则重新选择一个地洞.
    return null;
  }
  /**
   * 地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
   *
   * @param hole 地鼠所出地洞.
   * @param time 地鼠停留时间.
   */
  function comeOutAndStop(mole, time) {
    // TODO: 写地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
  }
  /**
   * 打地鼠。为每个MOLES添加点击事件，点击后分数显示+1，地鼠入洞。
   */
  MOLES.forEach(mole => mole.addEventListener('click', function(e) {
    // TODO: 在这里写用户点击地鼠发生的事.
  }));
};