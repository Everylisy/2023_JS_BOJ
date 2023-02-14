function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let answer = '';
    my_string.split('').forEach((value) => {
        if (!vowel.includes(value)) answer += value;
    })
    return answer;
}