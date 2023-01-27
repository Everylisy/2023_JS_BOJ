function solution(array) {
    if (array.length === 1) return array[0];
    const sortedArr = array.sort((a, b) => a - b);

    let obj = {};
    sortedArr.forEach((el) => {
        if (!obj[el]) obj[el] = 1;
        else obj[el]++;
    });

    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    if (arr.length > 1 && arr[0][1] === arr[1][1]) return -1;
    return +arr[0][0];
}