function solution(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root) ? 1 : 2;   
}