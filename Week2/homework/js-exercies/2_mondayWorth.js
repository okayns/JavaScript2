'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function hourlyRate(tasks) {
  const perPrice = tasks.map(price => (price.duration / 60) * 25);
  const totalMoney = `€${perPrice.reduce((total, money) => total + money, 0)}`;
  return totalMoney;
}

console.log(hourlyRate(mondayTasks));
