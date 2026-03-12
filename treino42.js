//Ultrapassando Z
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
let i = 0;
let soma = 0;
let contador = 0;
let X = parseInt(lines[i]);
i++;
let Z = parseInt(lines[i]);
i++;

while (Z <= X ) {
    Z = parseInt(lines[i]);
    i++;
}
let atual = X;

while (soma <= Z) {
    soma += atual;
    atual++;
    contador++;
}
console.log(contador);