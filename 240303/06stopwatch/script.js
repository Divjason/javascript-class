const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

let timerId;
const timerCount = [0, 0, 0];
let [min, sec, msec] = timerCount;

const displayTimer = () => {
  const time = document.querySelector(".time");
  const fMin = min < 10 ? `0${min}` : min;
  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMsec = msec < 10 ? `0${msec}` : msec;
  time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
};

const timer = () => {
  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;

    if (sec === 60) {
      sec = 0;
      min++;
    }
  }
  displayTimer();
};

const start = () => {
  if (!timerId) {
    timerId = setInterval(timer, 10);
  }
};

const stop = () => {
  clearInterval(timerId);
  timerId = undefined;
};

const reset = () => {
  stop();
  [min, sec, msec] = timerCount;
  displayTimer();
};

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
