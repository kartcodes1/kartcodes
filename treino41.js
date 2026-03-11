//identificando chá
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let T = parseInt(input [0]);
let resposta = input[1].split("").map(Number);
let acertos = 0 ;
for (let i = 0; i < resposta.length; i++) {
if (resposta[i] === T ) {
    acertos++;
   }
} 
console.log (acertos);