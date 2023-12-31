function solution(num_list) {
    const allSum = num_list.reduce((acc, cur) => acc + cur) ** 2;
    const allTimes = num_list.reduce((acc, cur) => acc * cur);
    
    return Number(allTimes < allSum);
}