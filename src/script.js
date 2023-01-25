import './style.css';


/* const curDate = new Date();
const date = curDate.toLocaleTimeString('en-US', { weekday: 'short' })
  .split(/\W/).map((v, i) => (i !== 0) ? v : v.toUpperCase())
  .filter((_, i) => i !== 3);

const elems = document.querySelectorAll('.container_date span');

elems.forEach((e, i) => {
  if (i !== 1 && i !== 2) {
    e.textContent = date[i];
  } else {
    const span = document.createElement('span');
    span.textContent = ':';
    span.classList.add('hidden');
    e.textContent = addZero(date[i]);
    e.appendChild(span);
  }
}) */

function addZero(num) {
  return (+num < 10) ? '0' + +num : num;
}

function showDate() {
  const curDate = new Date();
  const date = curDate.toLocaleTimeString('en-US', { weekday: 'short' })
    .split(/\W/).map((v, i) => (i !== 0) ? v : v.toUpperCase())
    .filter((_, i) => i !== 3);

  const elems = document.querySelectorAll('.date');
  elems.forEach((e, i) => {
    if (i !== 1 && i !== 2) {
      e.textContent = date[i];
    } else {
      const span = document.createElement('span');
      span.textContent = ':';
      span.classList.add('hidden');
      e.textContent = addZero(date[i]);
      e.appendChild(span);
    }
  })
}

async function fn() {
  const response = await new Promise(resolve => {
    let timerId = setTimeout(() => {
      resolve(showDate);
      timerId = setTimeout(fn, 0);
    }, 0);
  })

  return response();
}
// fn();