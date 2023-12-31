function solution(a, b, c) {
    const score = {
        onePoint: a + b + c,
        twoPoint: a ** 2 + b ** 2 + c ** 2,
        threePoint: a ** 3 + b ** 3 + c ** 3,
    }
    const {onePoint, twoPoint, threePoint} = score;
    
    if (a === b && b === c) {
        return onePoint * twoPoint * threePoint;
    } else if (a === b || a === c || b === c) {
        return onePoint * twoPoint;
    }
    return onePoint;
}