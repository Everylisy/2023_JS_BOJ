function solution(rsp) {
    let answer = '';
    rsp.split('').forEach((val) => {
        if (val === '2') answer += '0'; 
        else if (val === '0') answer += '5';
        else answer += '2';
    })
    return answer;
}