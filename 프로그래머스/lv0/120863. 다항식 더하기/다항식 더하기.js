function solution(polynomial) {
    const arr = polynomial.split(' + ');
    let [xCnt, intCnt] = [0, 0];

    arr.forEach((el) => {
        if (el.includes('x') && el.length > 1) xCnt += +el.split('x').join('');
        else if (Number.isInteger(+el)) intCnt += +el;
        else if (el === 'x') xCnt++;
    });

    if (xCnt === 0 && intCnt === 0) return '0';
    else if (xCnt > 0 && intCnt === 0) return xCnt === 1 ? 'x' : `${xCnt}x`;
    else if (xCnt === 0 && intCnt > 0) return `${intCnt}`;
    else if (xCnt === 1 && intCnt > 0) return `x + ${intCnt}`;
    return `${xCnt}x + ${intCnt}`;
}