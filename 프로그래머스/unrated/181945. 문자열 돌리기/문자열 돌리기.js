const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (line) => {
    line.split('').forEach((val, _) => console.log(val));
})