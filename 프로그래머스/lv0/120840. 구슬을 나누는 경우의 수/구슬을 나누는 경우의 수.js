function solution(balls, share) {
  	// 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
    return factorial(balls) / (factorial((balls-share)) * factorial(share))
}

function factorial(num) {
    let result = BigInt(1);
    for (let i = BigInt(2); num >= i; i++) {
        result *= i;
    }
    return result;
}