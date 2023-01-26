function solution(numbers) {
    const avg = numbers.reduce((acc, curVal) => acc + curVal) / numbers.length;
    return avg;
}