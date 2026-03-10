//Soma de ímpares consecutivos
const fs =  require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let N = parseInt(lines[0]);


for (let i = 1; i <= N; i++){
let valores = lines[i].split(' ').map(Number);
let X = valores[0];
let Y = valores[1];
let contador = 0;
let soma = 0;
while (contador < Y) {
    if (X % 2 !== 0){
        soma += X;
        contador++;
    }
    X++;
}
console.log(soma);
}
