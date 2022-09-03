const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');



function shuffle_sticks() {
  let hr = new Date().getHours() * 30;
  let min = new Date().getMinutes() * 6;
  let sec = new Date().getSeconds() * 6;
  hours.style.transform = `rotateZ(${hr}deg)`
  minutes.style.transform = `rotateZ(${min}deg)`
  seconds.style.transform = `rotateZ(${sec}deg)`

}

setInterval(shuffle_sticks, 1000)

shuffle_sticks()