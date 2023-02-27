function solution(spell, dic) {
    const answer = dic.filter((el) => {
        return spell.every(text => el.includes(text));
    });

    // ["ppooss"] 와 같이 "한번씩만" 사용되지 않는 경우에는 2를 반환하도록 수정
    const answerLen = answer.toString().split('').length;
    return answerLen === spell.length ? 1 : 2;
}