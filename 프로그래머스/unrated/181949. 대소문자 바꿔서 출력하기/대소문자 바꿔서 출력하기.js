const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer = str.split('').map((val, idx) => {
        if (str[idx] === val.toUpperCase()) return val.toLowerCase();
        return val.toUpperCase();
    });
    console.log(answer.join(''));
});