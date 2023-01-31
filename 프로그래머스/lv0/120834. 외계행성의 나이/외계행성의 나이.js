function solution(age) {
    let answer = '';
    const ageArr = age.toString().split('');
    ageArr.forEach((el) => answer += String.fromCharCode(Number(el) + 97));
    return answer;
}