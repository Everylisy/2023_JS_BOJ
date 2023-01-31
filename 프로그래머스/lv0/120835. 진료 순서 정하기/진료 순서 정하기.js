function solution(emergency) {
    const sorted = emergency.map(Number).sort((a, b) => b - a);
    const answer = emergency.map((val) => sorted.indexOf(val) + 1);
    return answer;
}