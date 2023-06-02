function solution(a, b) {
    const aCase = +(`${a}${b}`);
    const bCase = 2 * a * b;

    return aCase > bCase ? aCase : bCase;
}