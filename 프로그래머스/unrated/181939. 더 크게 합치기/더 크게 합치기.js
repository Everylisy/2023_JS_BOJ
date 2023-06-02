function getMergedNum(num1, num2) {
    return +`${num1}${num2}`  
}

function solution(a, b) {
    const aCase = getMergedNum(a, b);
    const bCase = getMergedNum(b, a);
    return Math.max(aCase, bCase);
}