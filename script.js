function startTime() {
  const today = new Date();
  let d = today.getDate();
  let mo = today.getMonth() + 1;
  let y = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  e = checkMeridiem(h);
  h = checkHour(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('date').innerHTML = y + '-' + mo + '-' + d;
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s + ' ' + e;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}

function checkHour(i) {
  if (i > 12) {
    i = i - 12;
    if (i < 10) {
      i = '0' + i;
    }
  }
  return i;
}

function checkMeridiem(i) {
  if (i < 12) {
    i = 'AM';
  } else {
    i = 'PM';
  }
  return i;
}

document.addEventListener('load', startTime());
