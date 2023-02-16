function solution(array, n) {
    const minus = array.sort((a, b) => a - b).map(val => [val,  Math.abs(n - val)]);
    const sorted = minus.sort((a, b) => a[1] - b[1]);
    return sorted[0][0];
}
