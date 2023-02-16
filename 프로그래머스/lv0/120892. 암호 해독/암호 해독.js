function solution(cipher, code) {
    const arr = cipher.split('');
    let answer = '';
    for (let i = code - 1; arr.length > i; i += code) {
        answer += arr[i];
    }
    return answer;
}