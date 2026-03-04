//contagem e classificação de cobaias em um laboratório.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const N = parseInt(lines[0]);
let total = 0;
let sapos = 0;
let coelhos = 0;
let ratos = 0;

for (let i = 1; i <= N; i++) {
    let valores = lines[i].split(' ');
    let quantidade = parseInt(valores[0]);
    let tipo = valores[1];
    
    total += quantidade;
    
    if (tipo === 'C') {
        coelhos += quantidade;
    } else if (tipo === 'S'){
        sapos += quantidade;
    } else if (tipo === 'R') {
        ratos += quantidade;
    }
} 
let percC = (coelhos / total) * 100;
let percS = (sapos / total) * 100;
let percR = (ratos / total) * 100;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${percC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percS.toFixed(2)} %`);