const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [A, B, C] = [
  parseInt(input[0].split(' ')[0]),
  parseInt(input[0].split(' ')[1]),
  parseInt(input[1]),
];
if (60 > B + C) B += C;
else {
  A += Math.floor((B + C) / 60);
  B = (B + C) % 60;
  if (23 < A) A -= 24;
}
console.log(A, B);