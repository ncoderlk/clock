const hourH = document.getElementById("hour-h");

const minuteH = document.getElementById("minute-h");

const secondH = document.getElementById("sec-h");


function getCurrent_Process() {
  const sec = new Date().getSeconds();
  const min = new Date().getMinutes();
  const hour = new Date().getHours();
  const secPos = ((sec / 60) * 360) + 90;
  secondH.style.transform = `rotate(${secPos}deg)`;
  const minPos = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
  minuteH.style.transform = `rotate(${minPos}deg)`;
  const hourPos = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
  hourH.style.transform = `rotate(${hourPos}deg)`;
}
setInterval(getCurrent_Process, 1000);
getCurrent_Process();
let date = new Date().getFullYear()
document.querySelector('span[title="cpy"]').textContent = date
