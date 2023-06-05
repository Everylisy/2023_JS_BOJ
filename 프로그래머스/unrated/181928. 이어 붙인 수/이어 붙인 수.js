function solution(num_list) {
    const even = num_list.filter(el => el % 2 === 0).join('');
    const odd = num_list.filter(el => el % 2 === 1).join('');
    return +even + +odd;
}