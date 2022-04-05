const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

startBtn.addEventListener('click', generateColor);
stopBtn.addEventListener('click', stopGenerateColor);

let intervalId = null;

function generateColor() {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

function stopGenerateColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
