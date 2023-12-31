function solution(code) {
    let mode = 0;
    let ret = '';
    const one = '1';
    const emptyMsg = 'EMPTY';
    
    [...code].map((v, i) => {
        if (mode === 0) {
            if (v === one) mode = 1;
            else if (i % 2 === 0) ret += v;
        } else {
            if (v === one) mode = 0;
            else if (i % 2 === 1) ret += v;
        }
    });
    
    return ret ? ret : emptyMsg;
}