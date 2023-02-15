function solution(balls, share) {
    return factorial(balls) / (factorial((balls-share)) * factorial(share))
}

function factorial(num) {
    let result = BigInt(1);
    for (let i = BigInt(1); num >= i; i++) {
        result *= i;
    }
    return result;
}