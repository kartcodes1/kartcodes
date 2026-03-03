//sequência de numeros multiplicados por eles mesmos
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let N = parseInt(lines[0]);
let num = 0;

for (let i = 1; i <= N; i++) {
    num++;
    console.log(`${num} ${num * num} ${num * num * num}`);
    
    
} 