'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const unOrderedList = document.getElementById('hobby');

myHobbies.forEach(function(hobby) {
  const listItem = document.createElement('li');
  unOrderedList.appendChild(listItem);
  listItem.innerHTML = hobby;
});
