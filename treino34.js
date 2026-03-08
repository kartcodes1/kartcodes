//Calculando fatorial
const fs =  require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8');

const N =  parseInt(input.trim());

let resultado = N;

for (let i = 1; i < N; i++) {
    resultado *= i;
}
console.log(resultado);