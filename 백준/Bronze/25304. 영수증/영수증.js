const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [X, N] = [+input[0], +input[1]];
let result = 0;
for (let i = 2; N >= i - 1; i++) {
  result += input[i]
    .split(' ')
    .map(Number)
    .reduce((acc, curVal) => acc * curVal);
}
X === result ? console.log('Yes') : console.log('No');