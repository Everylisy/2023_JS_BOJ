const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const students = [];
const notAssigned = [];

for (let i = 1; 30 >= i; i++) students.push(i);
students.forEach((el) => {
  if (!input.includes(el)) notAssigned.push(el);
});
console.log(notAssigned.join(' '));