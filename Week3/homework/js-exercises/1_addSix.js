'use strict';

function createBase(baseNum) {
  return function(addNum) {
    return baseNum + addNum;
  };
}

const addTen = createBase(10);
console.log(addTen(5));
console.log(addTen(14));
console.log(addTen(26));
