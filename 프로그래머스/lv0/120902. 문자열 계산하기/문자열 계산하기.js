function solution(my_string) {
    const arr = my_string.split(' ');
    let result = +arr[0];
    for (let i = 1; arr.length > i; i++) {
        if (arr[i] === '+') result += Number(arr[i + 1]);
        else if (arr[i] === '-') result -= Number(arr[i + 1]);
    }
    return result
}

// function solution(my_string) {
//     const arr = my_string.split(' + ');
//     let result = 0;
//     for (let i = 0; arr.length > i; i++) {
//         if (arr[i].length === 1) result += Number(arr[i]);
//         else {
//             const minus = arr[i].split(' - ').map(Number);
//             result += minus[0] - minus[1];
//         }
//     }
//     return result;
// }