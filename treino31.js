//Fórmula de bhaskara
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const linha1 = lines[0].split(' ');
 
 const A = parseFloat(linha1[0]);
 const B = parseFloat(linha1[1]);
 const C = parseFloat(linha1[2]);
 
 const D = Math.pow(B, 2) - 4 * A * C;

if (A === 0 || D < 0) {
    console.log('Impossivel calcular');
} else {

 let x1 = (-B + Math.sqrt(D)) / (2 * A);
let x2 = (-B - Math.sqrt(D)) / (2 * A);
 
 
 console.log('R1 = ' + x1.toFixed(5));
 console.log('R2 = ' + x2.toFixed(5));
 
}