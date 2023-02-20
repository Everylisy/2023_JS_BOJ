function solution(num, k) {
    let arr = num.toString().split('').map(Number);
    return arr.includes(k) ? arr.indexOf(k) + 1 : -1; 
}