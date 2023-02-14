function solution(my_string) {
    const answer = my_string.split('').map(Number).filter(val => (val === 0 || val));
    return answer.sort((a, b) => a - b);
}