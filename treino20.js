//multiplos de 13

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const X = parseInt(lines[0]);
const Y = parseInt(lines[1]);
let inicio = Math.min(X, Y);
let fim = Math.max(X, Y);
let multi = 0;

for (let i = inicio; i <= fim; i++) {
    if ( i % 13 !== 0 ) {
        multi += i;
    }
}
console.log(multi);