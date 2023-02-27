function solution(my_string) {
    const arr = my_string.split(/[^0-9]/g).map(Number);
    return arr.reduce((acc, cur) => acc + cur);
}