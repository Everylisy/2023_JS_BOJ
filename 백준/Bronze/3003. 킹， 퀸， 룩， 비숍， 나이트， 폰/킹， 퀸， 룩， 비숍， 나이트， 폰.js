const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const chessPiece = [1, 1, 2, 2, 2, 8];
const needPiece = chessPiece.map((curVal, idx) => curVal - input[idx]);
console.log(needPiece.join(" "));