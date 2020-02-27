'use strict';

const decrementSessionButton = document.querySelector('.fa-arrow-down');
const incrementSessionButton = document.querySelector('.fa-arrow-up');
const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');
const timeUpContainer = document.querySelector('.time-up');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');
const minutesSecondsContainer = document.querySelector('.minutes-seconds');
const setTime = document.querySelector('.set-time');
const runTime = document.querySelector('.run-time');

let isTimeRunning = false; // to check timer is running or not. I used that statement when timer equals 0.
let sessionLength = parseInt(setTime.textContent); //
let timer = null; //

function updateSession() {
  setTime.textContent = sessionLength;
  secondsContainer.textContent = '00';
  minutesContainer.textContent = sessionLength;
}

function incrementSession() {
  //
  sessionLength++;
  updateSession();
}

function decrementSession() {
  if (sessionLength > 0) {
    // prevents it from decreasing below 0
    sessionLength--;
    updateSession();
  }
}

function startTime() {
  isTimeRunning = true;
  timer = setInterval(updateTime, 1000);
}

function pauseTime() {
  isTimeRunning = false;
  clearInterval(timer);
}

function updateTime() {
  //
  if (checkTimeIsUp()) {
    // returning a boolean according to value of second. if second 0 (timeisUp) time decrement pauses and calling displayTimeIsUp func with true arg. It means change style to inline block of TImeIsUp context
    pauseTime();
    displayTimeIsUp(true);
  } else {
    // in else statement (second != 0) keep going to decrement timer.
    let seconds = getSeconds();
    seconds--;
    setSeconds(seconds);
  }
}

function checkDigit(digit) {
  //adding zero num. if number has single digit.
  return digit < 10 ? '0' + digit : digit;
}

function checkTimeIsUp() {
  return getSeconds() === 0;
}

function getSeconds() {
  // calculates the time as a second. (25 min = 25*60 second.)
  let minutes = parseInt(minutesContainer.textContent);
  let seconds = parseInt(secondsContainer.textContent);
  return minutes * 60 + seconds;
}

function setSeconds(sec) {
  // adding second and minute parts of running time.
  secondsContainer.textContent = checkDigit(sec % 60);
  minutesContainer.textContent = checkDigit(parseInt(sec / 60));
}

function displayTimeIsUp(isTimeUp) {
  /* I created two element.(One is contains minutes and seconds, the other one is contains 'Time is Up) 
and when timeup(seconds === 0) changing style display option none to inline-block*/
  timeUpContainer.style.display = isTimeUp ? 'inline-block' : 'none';
  minutesSecondsContainer.style.display = isTimeUp ? 'none' : 'inline-block';
}

function checkTimeIsUpDisplayed() {
  //
  return timeUpContainer.style.display !== 'none'; //
}

//EventListeners

incrementSessionButton.addEventListener('click', function() {
  if (!isTimeRunning) {
    //preventing to increase time while timeisRunning
    incrementSession();
  }
});

decrementSessionButton.addEventListener('click', function() {
  if (!isTimeRunning) {
    //preventing to decrease time while timeisRunning
    decrementSession();
  }
});

playButton.addEventListener('click', function() {
  if (!isTimeRunning) {
    //play button is working while time is not running. First checking isTimeRunning or not.
    if (checkTimeIsUpDisplayed()) {
      // checkTimeIsUpDisplayed func checking timeisup container display style is none or inline. returns a boolean.
      displayTimeIsUp = false;
      updateSession();
    }
    startTime();
  }
});

pauseButton.addEventListener('click', function() {
  if (isTimeRunning) {
    pauseTime();
  }
});
