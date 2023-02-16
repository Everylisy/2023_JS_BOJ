function solution(array, n) {
    // const minus = array.sort((a, b) => a - b).map(val => [val,  Math.abs(n - val)]);
    // const sorted = minus.sort((a, b) => a[1] - b[1]);
    // return sorted[0][0];
    
    // 내가 다시 풀어본 방법
    const mapArr = array.sort((a, b) => a - b).map(val => Math.abs(n - val));
    const sorted = [...mapArr].sort((a, b) => a - b);
    const index = mapArr.indexOf(sorted[0]);
    return array[index];
}
