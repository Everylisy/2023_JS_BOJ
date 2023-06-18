const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .filter((el) => isNaN(el));

input.map((str) => {
  const lastIdx = str.trim().length - 1;
  console.log(str.charAt(0) + str.charAt(lastIdx));
});
