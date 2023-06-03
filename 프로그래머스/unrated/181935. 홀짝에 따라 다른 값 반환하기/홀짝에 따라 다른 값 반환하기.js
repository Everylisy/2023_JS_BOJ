function solution(n) {
    const isEven = n % 2 === 0;
    const result = [];
    
    if (isEven) {
        for (let i = 1; n >= i; i++) {
            if (i % 2 === 0) result.push(i);
        };
        return result.reduce((acc, cur) => acc + cur**2, 0);
    } else {
        for (let i = 1; n >= i; i++) {
            if (i % 2 === 1) result.push(i);
        };
        return result.reduce((acc, cur) => acc + cur, 0);
    }
}