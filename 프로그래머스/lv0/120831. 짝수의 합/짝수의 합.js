function solution(n) {
    if (n === 1) return 0;
    const answer = Array(n).fill()
                            .map((val,idx) => idx + 1)
                            .filter((val) => val % 2 === 0)
                            .reduce((acc, cur) => acc + cur);
    return answer;
}