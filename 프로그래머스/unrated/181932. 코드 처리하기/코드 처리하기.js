function solution(code) {
    const ret = [];
    let mode = 0;

    [...code].map((val, idx) => {
        
        if(mode === 0) {
            if (val === '1') mode = 1;
            else if (idx % 2 === 0) ret.push(val);
        } else {
            if (val === '1') mode = 0;
            else if (idx % 2 === 1) ret.push(val);
        }
    });
    
    return ret.length ? ret.join('') : 'EMPTY';
}