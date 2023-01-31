let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let value of croatia) input = input.split(value).join('1');
console.log(input.length);