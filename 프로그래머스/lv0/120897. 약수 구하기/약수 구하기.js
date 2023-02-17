function solution(n) {
    const answer = [];
    for(let i = 1; n >= i; i++) {
        if(n % i === 0) answer.push(i);
    }
    return answer;
}