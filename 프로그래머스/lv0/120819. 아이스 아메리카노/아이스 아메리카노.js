function solution(money) {
    const price = 5500;
    return [parseInt(money / price), money % price];
}