'use strict';

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    console.log(a);
  };
})();

x();

// The output will be 12. Why>
// In the first line of our code we declare a variable with let in global scope(means accessible from every scope)
// Inside of funct. the value of a is changed to 12 then we return a func and also it is a closure func. and it checks the latest value of which is 12. And x() = calls the inner function and it logs 12 to console. Below you can see the closure styled writing of the func.

let a = 10;
function testFunction() {
  a = 12;
  return function() {
    console.log(a);
  };
}

const x = testFunction();
x();
