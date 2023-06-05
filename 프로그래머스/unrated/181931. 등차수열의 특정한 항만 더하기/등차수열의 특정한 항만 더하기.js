function solution(a, d, included) {
    const numArr = [a];
    for (let idx = 1; included.length > idx; idx++) {
        numArr[idx] = numArr[idx - 1] + d;
    }
    
    return numArr.reduce((acc, cur, idx) => included[idx] ? acc + cur : acc, 0);
}