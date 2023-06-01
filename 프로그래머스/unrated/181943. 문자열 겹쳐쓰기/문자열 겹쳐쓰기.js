function solution(my_string, overwrite_string, s) {
    const myStrArr = [...my_string];
    myStrArr.splice(s, overwrite_string.length, overwrite_string);
    return myStrArr.join("");
}