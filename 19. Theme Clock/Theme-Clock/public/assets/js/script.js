const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

let darkMode = false;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const toggleDarkMode = () => {
  darkMode = !darkMode;
  darkMode
    ? (toggle.innerText = 'Dark Mode')
    : (toggle.innerText = 'Light Mode');
  document.body.parentElement.classList.toggle('dark');
};

toggleDarkMode();

toggle.addEventListener('click', toggleDarkMode);

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const clockHours = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    clockHours,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 1s linear'}`;

  timeEl.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  dateEl.innerHTML = `${days[day]}, ${
    months[month]
  } <span class="circle">${time.getDate()}</span>`;
};

const pad = (n) => {
  return n < 10 ? '0' + n : n;
};

setInterval(setTime, 500);
const t = new Date();
console.log(t.getDate());
