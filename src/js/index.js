import '../sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;
let isStart = false;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isStart) {
    return;
  }
  intervalId = setInterval(setRandomColor, 1000);
  isStart = true;
  disableStartBtn();
}

function onStopBtnClick() {
  clearInterval(intervalId);
  isStart = false;
  disableStartBtn();
}

function disableStartBtn() {
  refs.startBtn.disabled = isStart;
}

function setRandomColor() {
  document.body.style.backgroundColor = colors[randomNumber(0, colors.length - 1)];
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
