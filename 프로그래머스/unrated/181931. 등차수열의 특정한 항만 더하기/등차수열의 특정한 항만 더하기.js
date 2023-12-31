function solution(a, d, included) {
    let answer = 0;
    
    for(const bool of included) {
        if (bool) answer += a;
        a += d;
    }

    return answer;
}