function solution(s) {
    s = s.split('');
    const obj = {};
    s.forEach((el, idx) => {
        if (!obj[el]) obj[el] = 1;
        else obj[el]++;
    });

    const arr = Object.entries(obj).filter(val => val[1] === 1);    
    const answer = arr.map((val, idx) => arr[idx][0]);
    return answer.sort().join('');
}