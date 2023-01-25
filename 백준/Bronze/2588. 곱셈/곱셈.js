const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [top, bottom] = [input[0], input[1]];
bottom
  .split('')
  .reverse()
  .map((val) => console.log(top * val));
console.log(top * bottom);
