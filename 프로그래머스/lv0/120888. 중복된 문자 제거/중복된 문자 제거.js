function solution(my_string) {
    const arr = my_string.split('');
    let answer = [];
    arr.forEach((val) => {
        if(!answer.includes(val)) answer.push(val);
    })
    return answer.join('');
}