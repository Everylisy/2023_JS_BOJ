function solution(my_string) {
    const answer = my_string.split('').map(Number).filter(val => !isNaN(val));
    return answer.reduce((acc, cur) => acc + cur);
}