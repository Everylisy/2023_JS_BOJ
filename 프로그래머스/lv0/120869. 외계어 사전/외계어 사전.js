function solution(spell, dic) {
    let answer = 2;
    dic.forEach((el) => {
        spell.every(text => el.includes(text)) ? answer = 1 : null;
    });
    return answer;
}