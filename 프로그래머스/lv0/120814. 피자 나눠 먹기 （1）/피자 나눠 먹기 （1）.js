function solution(n) {
    if (n === 1) return 1;
    // else if (n / 7 === 0) return 1;
    else return Math.ceil(n / 7);
}