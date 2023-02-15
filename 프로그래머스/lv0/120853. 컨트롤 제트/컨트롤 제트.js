function solution(s) {
    let arr = s.split(' ');
    arr.map((val, idx) => {
        if(arr[idx] === 'Z') {
            arr[idx] = 0;
            arr[idx - 1] = 0;
        }
    });
    return arr.map(Number).reduce((acc, cur) => acc + cur);
}