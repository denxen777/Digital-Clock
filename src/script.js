import './style.css';

const addZero = num => +num < 10 ? '0' + +num : num;

function setDate() {
  const curDate = new Date();
  const date = curDate.toLocaleTimeString('en-US', { weekday: 'short' })
    .split(/\W/).map((v, i) => (i !== 0) ? v : v.toUpperCase())
    .filter((_, i) => i !== 3);

  const elems = document.querySelectorAll('.date');
  elems.forEach((e, i) => {
    if (i !== 1 && i !== 2) {
      e.textContent = date[i];
      return;
    }
    const span = document.createElement('span');
    span.textContent = ':';
    span.classList.add('hidden');
    e.textContent = addZero(date[i]);
    e.appendChild(span);
  })
}

async function displayDate() {
  const response = await new Promise(resolve => {
    let timerId = setTimeout(() => {
      resolve(setDate);
      timerId = setTimeout(displayDate, 500);
    }, 500);
  })

  return response();
}

displayDate();







