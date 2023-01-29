function solution(my_string, n) {
    let answer = '';
    for (let i = 0; my_string.length > i; i++) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}