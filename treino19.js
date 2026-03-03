//soma de ímpares consecutivos

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {

    let soma = 0; 

    let valores = lines[i].split(' ').map(Number);
    let x = valores[0];
    let y = valores[1];

    let inicio = Math.min(x, y);
    let fim = Math.max(x, y);

    for (let j = inicio + 1; j < fim; j++) {
        if (j % 2 !== 0) {
            soma += j;
        }
    }

    console.log(soma);
}