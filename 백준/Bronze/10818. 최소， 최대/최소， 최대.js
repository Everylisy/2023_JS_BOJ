const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

const arr = input[1].trim().split(' ').map(Number);
console.log(Math.min(...arr), Math.max(...arr));