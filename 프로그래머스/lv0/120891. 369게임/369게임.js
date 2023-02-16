function solution(order) {
    const arr = order.toString().split('');
    let cnt = 0;
    arr.forEach((el) => {
        if (el === '3' || el === '6' || el === '9') cnt++;
    })
    return cnt;
}