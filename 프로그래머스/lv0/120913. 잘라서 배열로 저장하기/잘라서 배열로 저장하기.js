function solution(my_str, n) {
    const answer = [];
    for (let i = 0; my_str.length > i; i += n) {
        answer.push(my_str.slice(i, i + n));
    }
    return answer;
}