const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');

const dial = {
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

let time = 0;
input.forEach((el) => {
  for (let j = 2; 9 >= j; j++) {
    if (dial[j].includes(el)) time += j + 1;
  }
});
console.log(time);