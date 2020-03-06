'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arr) {
  const nonDuplicatedArray = arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
  return nonDuplicatedArray;
}

// Second Way...(Reduce Method)

function removeDuplicates(arr) {
  const cleanSet = arr.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    [],
  );
  return cleanSet;
}

console.log(removeDuplicates(letters));
