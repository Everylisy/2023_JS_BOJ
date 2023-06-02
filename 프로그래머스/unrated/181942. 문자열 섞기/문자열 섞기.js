function solution(str1, str2) {
    const answer = [...str1].map((val, idx) => val + str2[idx]).join('');
    return answer;
}