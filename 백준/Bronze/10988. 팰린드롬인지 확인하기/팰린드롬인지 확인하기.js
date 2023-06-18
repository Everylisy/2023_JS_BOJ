const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const inputReverse = input.split('').reverse().join('');
console.log(input === inputReverse ? 1 : 0);