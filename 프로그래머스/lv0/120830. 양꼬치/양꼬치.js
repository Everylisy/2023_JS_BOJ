function solution(n, k) {
    let service = 0;
    const serving = 12000 * n;
    const drink = 2000 * k;
    if (10 <= n) service = parseInt(n / 10) * 2000;
    return serving + drink - service;
}