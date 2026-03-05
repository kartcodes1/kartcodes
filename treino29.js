//Sequência lógica 2
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
let lines =  input.trim().split('\n');
let linha = "";
let contador = 0;
const valores = lines[0].split(' ').map(Number);
let X = valores[0];
let Y = valores[1];

for (let i = 1; i <= Y; i++) {
    linha += i + " ";
    contador++;
    if (contador === X) {
        console.log(linha.trim());
        linha = "";
        contador = 0;
   } 
    
}