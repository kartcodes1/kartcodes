// Divisão de valor X por valor Y
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let [x, y] = lines[i].split(' ').map(Number);
    if (y === 0) {
        console.log('divisao impossivel');
    } else {
        console.log((x / y).toFixed(1));
}
    
   } 