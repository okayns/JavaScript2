'use strict';

const billInput = document.querySelector('#bill');
const serviceInput = document.querySelector('#service');
const btn = document.querySelector('#calculate-btn');
const peopleInput = document.querySelector('#people');
const tipForEach = document.querySelector('#tip-each');
const textEach = document.querySelector('.text-each');

function calculateTip(bill, serviceQuality, people, e) {
  let tip = (bill * serviceQuality) / people;
  if (people === 1) {
    textEach.style.display = 'none';
  }
  tipForEach.textContent = tip.toFixed(2);
}

function getBill() {
  let billValue = parseFloat(billInput.value);
  if (billInput.value === '') {
    return alert('You need to fill in the Bill field');
  } else {
    return billValue;
  }
}

function getService() {
  let serviceValue = parseFloat(serviceInput.value) / 100;
  return serviceValue;
}

function getPeople() {
  let peopleValue = parseFloat(peopleInput.value);
  if (peopleInput.value === '') {
    return alert('You need to fill in the People field');
  } else {
    return peopleValue;
  }
}

btn.addEventListener('click', function() {
  calculateTip(getBill(), getService(), getPeople());
});
