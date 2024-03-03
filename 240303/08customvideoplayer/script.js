const video = document.querySelector("video");
const playButton = document.querySelector(".play-pause");
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");

const updateProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  const progressBar = document.querySelector(".bar");
  progressBar.style.width = `${percent}%`;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

const formatiing = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatiing(video.currentTime);
  duration.innerText = formatiing(video.duration);
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const play = () => {
  playButton.innerText = "∥";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  console.log("click");
  video.paused ? play() : pause();
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

volumeBar.addEventListener("change", setVolume);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);

rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});
