function solution(A, B) {
    if (A === B) return 0;
    const aArr = A.split('');

    for (let i = 0; A.length > i; i++) {
        aArr.unshift(aArr.pop());
        console.log(A);
        if (aArr.join('') === B) return i + 1;  
    }
    return -1;
}