'use strict';

const myNumbers = [1, 2, 3, 4];

function doubleEvenNumbers(numbers) {
  const evenNumbers = myNumbers.filter(number => number % 2 === 0);
  const evenMultiply = evenNumbers.map(number => number * 2);
  return evenMultiply;
}

console.log(doubleEvenNumbers(myNumbers));
