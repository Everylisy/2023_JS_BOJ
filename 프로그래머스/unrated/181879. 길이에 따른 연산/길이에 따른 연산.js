function solution(num_list) {
    const listLen = num_list.length;
    return num_list.reduce((acc, cur) => listLen >= 11 ? acc + cur : acc * cur);
}