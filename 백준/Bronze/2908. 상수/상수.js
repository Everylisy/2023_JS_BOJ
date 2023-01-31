const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [A, B] = [
  input[0].split('').reverse().join(''),
  input[1].split('').reverse().join(''),
];
console.log(Math.max(A, B));