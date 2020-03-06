'use strict';

const x = 9; // in the this function x variable is primitive data type.Primitive data types has pass by value property.
//  So when we call the f1 function with param x. means val = x but it is not changing the actual x value.
//It changes copy of x.
function f1(val) {
  val = val + 1;
  return val; // returns last value of 'val 10' but at the end we are not holding with any variable the 'val' .
}
f1(x);
console.log(x); // Just printing value of 'x' 9.

const y = { x: 9 }; // difference with first function is; variable is an object not a primitive data type.
// When we call the function with an object param. that point out an address in the memory.
//in primitive, creates a copy of the variable and in the function changes its copy not original value
//In objects this can also called pass by reference property.
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y); // prints 10
console.log(y);
