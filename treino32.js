//Somando inteiros consecutivos
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const valores = input.trim().split(' ').map(Number);

let A = valores[0];
let N;

for (let i = 1; i < valores.length; i++) {
    if (valores[i] > 0) {
         N = valores[i];
        break;
    }
}
let soma = 0;

for (let i = 0; i < N; i++) {
    soma += A + i;
}
console.log(soma);