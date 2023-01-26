function solution(n) {
    let pizzaPiece = 6;
    while (pizzaPiece % n !== 0) pizzaPiece += 6;
    return pizzaPiece / 6;
}