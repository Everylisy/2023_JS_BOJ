function solution(hp) {
    let cnt = 0;
    cnt += parseInt(hp / 5);
    cnt += parseInt((hp % 5) / 3);
    cnt += parseInt((hp % 5) % 3);
    return cnt;
}