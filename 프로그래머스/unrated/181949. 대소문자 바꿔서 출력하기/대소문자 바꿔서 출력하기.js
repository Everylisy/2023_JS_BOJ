const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function(line) {
    const answer = line.split('').map((val, _) => {
        return val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase();
    }).join('');
    console.log(answer);
});