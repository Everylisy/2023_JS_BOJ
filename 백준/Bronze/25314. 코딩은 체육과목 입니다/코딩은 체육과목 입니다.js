const N = +require('fs').readFileSync('/dev/stdin');

const long = 'long ';
console.log(`${long.repeat(N / 4)}int`);