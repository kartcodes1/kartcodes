//substituição em vetor simples
const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let X = [];

for (let i = 0; i < 10; i++) {
    let valor = parseInt(input[i]);
    if ( valor <= 0 ) {
        valor = 1;
    }
    X[i] = valor;
}

for (let i = 0; i < 10; i++) {
    console.log(`X[${i}] = ${X[i]}`);
}