const N = +require('fs').readFileSync('/dev/stdin');

for (let i = 1; 9 >= i; i++) console.log(`${N} * ${i} = ${N * i}`);
