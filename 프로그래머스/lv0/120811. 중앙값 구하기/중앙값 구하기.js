function solution(array) {
    const arrayMiddle = parseInt(array.length / 2);
    return array.sort((a, b) => a - b)[arrayMiddle];
}