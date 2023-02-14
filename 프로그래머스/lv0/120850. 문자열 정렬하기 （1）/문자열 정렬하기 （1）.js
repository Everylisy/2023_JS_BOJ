function solution(my_string) {
    const answer = my_string.split('').map(Number).filter(val => !isNaN(val));
    return answer.sort((a, b) => a - b);
}