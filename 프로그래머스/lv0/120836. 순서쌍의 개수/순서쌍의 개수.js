function solution(n) {
    const answer = [];
    let i = 0;
    while(n >= i) {
        if (n % i === 0) answer.push(i);
        i++;
    }
    return answer.length;
}