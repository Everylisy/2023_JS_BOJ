const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

console.log(input.reduce((acc, cur) => acc + cur));