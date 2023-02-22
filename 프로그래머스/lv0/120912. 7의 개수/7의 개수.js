function solution(array) {
    let sevenArr = array.join('').split('').filter(el => +el === 7);
    return sevenArr.length;
}