const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [S, i] = [...input];
console.log(S.charAt(i - 1));
