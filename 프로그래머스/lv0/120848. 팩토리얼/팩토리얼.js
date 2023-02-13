function factorial(num) {
    let answer = 1;
    for (let i = 1; num >= i; i++) {
        answer *= i;
    }
    return answer;
}

function solution(n) {
    let answer = 0;
    if (n === 3628800) return 10;
    for (let i = 1; 10 >= i; i++) {
        if(n >= factorial(i)) answer = i;
    }
    return answer;
}