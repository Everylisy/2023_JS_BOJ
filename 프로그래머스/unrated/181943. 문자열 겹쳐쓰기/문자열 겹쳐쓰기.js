function solution(my_string, overwrite_string, s) {
    const overWriteLen = overwrite_string.length;
    const myStrArr = [...my_string];
    myStrArr.splice(s, overWriteLen, overwrite_string);
    return myStrArr.join('');
}