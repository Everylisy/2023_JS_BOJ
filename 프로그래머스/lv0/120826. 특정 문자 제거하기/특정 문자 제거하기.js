function solution(my_string, letter) {
    const arr = my_string.split('');
    const answer = arr.filter((el) => el !== letter);
    return answer.join('');
}