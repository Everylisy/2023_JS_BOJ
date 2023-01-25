const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

const [A, B, C] = [input[0], input[1], input[2]];
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
