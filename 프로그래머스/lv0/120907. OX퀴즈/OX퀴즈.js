function calc(formula) {
    let result = +formula[0];
    if (formula[1] === '+') result += Number(formula[2]);
    else if (formula[1] === '-') result -= Number(formula[2]);
    return result;
}

function solution(quiz) {
    const answer = [];
    quiz.forEach((el, idx) => {
        let formula = el.split(' ');
        let quizResult = +formula[4];
        calc(formula) === quizResult ? answer.push("O") : answer.push("X");
    })
    return answer;
}