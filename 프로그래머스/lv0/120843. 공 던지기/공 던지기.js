function solution(numbers, k) {
    const len = numbers.length;
    return numbers[(((k - 1) * 2) % len)];
}