function checkPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    const divisors = [];
    for (let i = 2; n >= i; i++) {
        if (n % i === 0 && checkPrime(i)) divisors.push(i);
    }
    return divisors;
}