function solution(num_list) {
    let [oddSum, evenSum] = ['', ''];
    
    for (const num of num_list) {
        num % 2 === 0 ? evenSum += num : oddSum += num;
    }
    
    return +oddSum + +evenSum;
}