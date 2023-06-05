function solution(a, b, c) {
  const scoreOne = a + b + c;
  const scoreTwo = a ** 2 + b ** 2 + c ** 2;
  const scoreThree = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) return scoreOne * scoreTwo * scoreThree; 
  if (a === b || b === c || a === c) return scoreOne * scoreTwo;
  return scoreOne;
}
