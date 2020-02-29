'use strict';

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

function totalAge(ageArray) {
  return ageArray.reduce((total, age) => total + age);
}

function collectiveAge(members, sumFunction) {
  const ageList = members.map(member => member.age);
  return `collective age ${sumFunction(ageList)}`;
}

console.log(collectiveAge(hackYourFutureMembers, totalAge));

// const members = hackYourFutureMembers
//   .map(member => member.age) // creates new array that include hackYourFutureMembers age
//   .reduce((total, age) => total + age); // combines all ages of new age array.

// console.log(`The collective age of the HYF team is: ${members}`);
