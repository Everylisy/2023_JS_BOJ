function solution(id_pw, db) {
    const [id, pw] = [...id_pw];
    let answer = 'fail';

    db.forEach((el) => {
        if (id === el[0] && pw === el[1]) answer = 'login';
        else if (id === el[0] && pw !== el[1]) answer = 'wrong pw';
    });
    
    return answer;
}