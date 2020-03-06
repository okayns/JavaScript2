'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  for (let i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  // Should create an array [10,11,12,13,14,15]
  console.log(numbers);
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to
  numbers.forEach(number => {
    if (number % 5 === 0 && number % 3 === 0) {
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 5 === 0) {
      fiveCallback(number);
    } else if (number % 3 === 0) {
      threeCallback(number);
    }
  });
}

function sayThree(num) {
  console.log(num + ' is divisible 3');
}

function sayFive(num) {
  console.log(num + ' is divisible 5');
}

threeFive(10, 15, sayThree, sayFive);
