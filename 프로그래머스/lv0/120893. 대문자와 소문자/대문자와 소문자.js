function solution(my_string) {
    const asciiArr = my_string.split('');
    const answer = asciiArr.map((val) => {
        if(val.toUpperCase() === val) return val.toLowerCase();
        else return val.toUpperCase();
    })
    return answer.join('');
}