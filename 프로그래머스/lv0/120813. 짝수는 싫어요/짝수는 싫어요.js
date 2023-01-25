function solution(n) {
    const answer = [];
    for(let count = 0; n >= count; count++) {
        if(count % 2 == 1)
            answer.push(count);
    }
    return answer;
}