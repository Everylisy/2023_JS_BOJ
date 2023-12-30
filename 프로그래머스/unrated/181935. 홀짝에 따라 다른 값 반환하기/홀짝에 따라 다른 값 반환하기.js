function solution(n) {
    let [evenSum, oddSum] = [0, 0];
    const isEven = n % 2 === 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) evenSum += Math.pow(i, 2);
        else oddSum += i;
    }
    return isEven ? evenSum : oddSum;
}