function solution(before, after) {
    const [sBefore, sAfter] = [[...before].sort(), [...after].sort()];
    let result = 1;

    sBefore.forEach((el, idx) => {
        el !== sAfter[idx] ? result = 0 : null;
    });

    return result; 
}