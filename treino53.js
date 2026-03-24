//Programa que calcula Área do circulo
const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8');

let raio = parseFloat(input);

let pi = 3.14159;

let A = (Math.pow(raio, 2)) * pi;

console.log(`A=${A.toFixed(4)}`);

