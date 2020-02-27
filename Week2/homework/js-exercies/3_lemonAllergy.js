'use strict';

const fruitBasket = [
  'Apple',
  'Lemon',
  'Grapefruit',
  'Lemon',
  'Banana',
  'Watermelon',
  'Lemon',
];

function lemonsOut(array) {
  const noLemon = `My mom bought me a fruit basket, containing ${array.filter(
    key => key !== 'Lemon',
  )} !`;
  return noLemon;
}

console.log(lemonsOut(fruitBasket));
