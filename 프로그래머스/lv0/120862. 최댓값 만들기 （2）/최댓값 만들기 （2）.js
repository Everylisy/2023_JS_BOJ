function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    let multiArr = [];
    for (let i = 0; numbers.length - 1 > i; i++) {
        multiArr.push(numbers[i] * numbers[i + 1]); 
    }
    return Math.max(...multiArr);
}