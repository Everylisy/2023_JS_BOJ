function checkComp(num) {
    for (let i = 2; num > i; i++) {
        if(num % i === 0) return true;
    }
    return false;
}

function solution(n) {
    let compCnt = 0;

    for (let i = 1; n >= i; i++) {
        if (checkComp(i)) compCnt++;
    }
    return compCnt;
}