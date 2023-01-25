function solution(n) {
    const answer = [];
    for(let count = 0; n >= count; count++) {
        if(count % 2 === 1)
            answer.push(count);
    }
    return answer;
}
// 그냥 인덱스 2개씩 증가시켜서 홀수만 push 하는 방법도 있다.
// filter를 활용하는 방법도 있다.