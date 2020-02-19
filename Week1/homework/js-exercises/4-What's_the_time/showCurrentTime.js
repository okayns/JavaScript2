'use strict'

function addZero(num) {// if the number is consist of one digit adding '0' to left of the number. 
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

let myTime = setInterval(time, 1000);// calling the function every 1 sec.(1000ms)

const minuteLine = document.querySelector('.line-minute')
const secondLine = document.querySelector('.line-second')
const hourLine = document.querySelector('.line-hour')
const clockText = document.querySelector('span')


function time() {
    let today = new Date
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    const secondDegree = (second / 60) * 360 + 90;// converting seconds minutes and hours to degree. because below i created a circle clock.
    const minuteDegree = (minute / 60) * 360 + 90;
    const hourDegree = (hour / 12) * 360 + 90;

    minuteLine.style.transform = `rotate(${minuteDegree}deg)`; // these codes rotating the lines to show current time.  
    secondLine.style.transform = `rotate(${secondDegree}deg)`; // just basic clock. dont expect too much things :)
    hourLine.style.transform = `rotate(${hourDegree}deg)`;
    clockText.innerHTML = hour + ":" + minute + ":" + second
    hourLine.style.backgroundColor = 'red' 
}