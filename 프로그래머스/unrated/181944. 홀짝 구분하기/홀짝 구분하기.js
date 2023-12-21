const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const answer = line % 2 === 0 ? 'even' : 'odd';
    console.log(`${line} is ${answer}`);
})