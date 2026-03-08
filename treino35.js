//cálculo de média de idade
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n').map(Number);

let resultado = 0;
let contador = 0;

for (let i = 0;  i < lines.length; i++) {
    if (lines[i] < 0) break;
    resultado += lines[i];
    contador++;
    }
    
let media = resultado/contador;
console.log(media.toFixed(2));