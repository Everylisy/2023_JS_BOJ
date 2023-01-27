const N = +require('fs').readFileSync('/dev/stdin');

let sum = 0;
for (let i = 1; N >= i; i++) sum += i;
console.log(sum);