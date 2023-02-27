function solution(sides) {
    sides.sort((a, b) => a - b)
    const [remain, max] = [...sides];
    const sidesNum = sides.reduce((acc, cur) => acc + cur);
    const arr = [];
    
    for(let i = 1; max >= i; i++) {
        if (max < remain + i) arr.push(i);
    }
    
    for (let j = 1; sidesNum >= j; j++) {
        if (max < j && sidesNum > j) arr.push(j);
    }
    
    return arr.length;
}