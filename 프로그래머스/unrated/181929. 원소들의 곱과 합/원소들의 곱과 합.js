function solution(num_list) {
    const multi = num_list.reduce((acc, cur) => acc * cur);
    const square = num_list.reduce((acc, cur) => acc + cur)**2;
    return square > multi ? 1 : 0;
}