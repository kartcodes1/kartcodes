//conversão de valores em notas e moedas
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const N = parseFloat(lines[0]);
let valor = N ;
valor = Math.round(valor * 100);

let notas = [10000, 5000, 2000, 1000, 500, 200];
let moedas = [100, 50, 25, 10, 5, 1];

console.log('NOTAS:');
for (let i = 0; i < notas.length; i++) {
    quantidade = Math.floor(valor / notas[i]);
    console.log ( quantidade + ' nota(s) de R$ ' + (notas[i]/100).toFixed(2));
    valor = valor % notas[i];
}
console.log('MOEDAS:');
for (let i = 0; i < moedas.length; i++) {
    quantidade2 = Math.floor(valor/moedas[i]);
    console.log(quantidade2 + ' moeda(s) de R$ ' + (moedas[i]/100).toFixed(2));
    valor = valor % moedas[i];
}