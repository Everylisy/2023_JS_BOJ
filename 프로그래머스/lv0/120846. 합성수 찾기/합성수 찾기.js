function checkPrime(num) {
    for (let i = 2; num > i; i++) {
        if(num % i === 0) return true;
    }
    return false;
}

function solution(n) {
    let primeCnt = 0;

    for (let i = 1; n >= i; i++) {
        if (checkPrime(i)) primeCnt++;
    }
    return primeCnt;
}