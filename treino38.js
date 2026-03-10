//Divisores 1
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input.trim());

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        console.log(i);
    }
}