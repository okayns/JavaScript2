'use strict';

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

const members = hackYourFutureMembers
  .map(member => member.age) // creates new array that include hackYourFutureMembers age
  .reduce((total, age) => total + age); // combines all ages of new age array.

console.log(`The collective age of the HYF team is: ${members}`);
