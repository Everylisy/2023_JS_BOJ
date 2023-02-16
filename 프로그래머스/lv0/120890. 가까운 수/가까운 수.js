function solution(array, n) {
    const mapArr = array.sort((a, b) => a - b).map((val) => [val, Math.abs(n - val)]);
    const sortedArr = mapArr.sort((a, b) => a[1] - b[1]);
    // if (sortedArr[0][1] === sortedArr[1][1]) return sortedArr[0][1];
    return sortedArr[0][0];
}