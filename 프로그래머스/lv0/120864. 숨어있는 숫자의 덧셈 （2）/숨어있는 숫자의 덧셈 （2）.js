function solution(my_string) {
    const regex = /[^0-9]/g;
    const arr = my_string.replace(regex, ' ')
                            .split(' ')
                            .map(Number)
                            .filter(el => !isNaN(el));
    return arr.reduce((acc, cur) => acc + cur);
}