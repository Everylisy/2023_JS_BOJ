const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .toUpperCase()
  .split('');

if (input.length === 1) {
  console.log(input[0]);
  return;
}

const obj = {};
input.forEach((el) => {
  if (!obj[el]) obj[el] = 1;
  else obj[el]++;
});

const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
if (arr[0][1] === arr[1][1]) console.log('?');
else console.log(arr[0][0]);