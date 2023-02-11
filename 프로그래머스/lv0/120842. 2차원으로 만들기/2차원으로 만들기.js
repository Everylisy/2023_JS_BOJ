function solution(num_list, n) {
    const newArr = [];

    for (let i = 0; num_list.length > i; i += n) {
        newArr.push(num_list.slice(i, n + i));
    }
    return newArr;
}