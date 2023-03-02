function solution(i, j, k) {
    let kCnt = 0;
    
    for (let l = i; j >= l; l++) {
        let arr = [...String(l)];
        arr.forEach((el) => +el === k ? kCnt++ : null);
    }

    return kCnt;
}