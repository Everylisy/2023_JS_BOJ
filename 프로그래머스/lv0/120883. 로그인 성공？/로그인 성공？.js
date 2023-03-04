function solution(id_pw, db) {
    const [id, pw] = [...id_pw];
    let answer = '';

    db.forEach((el) => {
        if (id === el[0] && pw === el[1]) answer = 'login';
        else if (id === el[0] && pw !== el[1]) answer = 'wrong pw';
        else if (id !== el[0] && pw !== el[1]) answer = 'fail';
    });
    
    return answer;
}