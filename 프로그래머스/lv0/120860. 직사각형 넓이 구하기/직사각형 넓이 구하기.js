function solution(dots) {
    const xArr = [...dots].map(val => val[0]);
    const yArr = [...dots].map(val => val[1]);
    const x = Math.max(...xArr) - Math.min(...xArr);
    const y = Math.max(...yArr) - Math.min(...yArr);
    return x * y;
}