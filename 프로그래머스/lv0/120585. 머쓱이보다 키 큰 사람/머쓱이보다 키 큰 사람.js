function solution(array, height) {
    const answer = array.filter(el => el > height);
    return answer.length;
}