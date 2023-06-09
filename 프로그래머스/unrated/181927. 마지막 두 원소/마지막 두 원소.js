function solution(num_list) {
    const [prevLast, last] = num_list.slice(-2);
     last > prevLast ? num_list.push(last - prevLast) : num_list.push(last * 2);
    
    return num_list;
}