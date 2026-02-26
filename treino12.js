// Sequência de Números e Soma

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
let soma = 0;
for (let i = 0; i < lines.length; i++) {
    let [M, N] = lines[i].split(' ').map(Number);
    if (M === 0 || N === 0) break;
    
    let inicio = Math.min(M, N);
    let fim = Math.max(M, N);
    let soma = 0;
    let resultado = ' ';
    
    for (let j = inicio; j < fim; i++) {
        resultado += j + ' ';
        soma += j;
    }
        
    console.log(`${resultado}Sum=${soma}`);    
   
}  