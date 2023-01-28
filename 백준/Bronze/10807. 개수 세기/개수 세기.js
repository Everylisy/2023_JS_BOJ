const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

const arr = input[1].trim().split(' ').map(Number);
const v = +input[2];
let count = 0;

arr.forEach((value) => {
  if (value === v) count++;
});
console.log(count);