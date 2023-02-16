// function solution(numbers, k) {
//     const len = numbers.length;
//     return numbers[(((k - 1) * 2) % len)];
// }

// 반복문으로도 해결 가능
function solution(numbers, k) {
    let cnt = 1;
    for (let i = 0;;i += 2) {
        i %= numbers.length;
        if (cnt === k) return numbers[i];
        cnt++;
    }
}