//Maior e posição
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numeros = lines.map(Number);
let contador = 0;
let maior = Math.max(...numeros);


for(let i = 0; i < numeros.length; i++) {
  contador++;
   if(numeros[i] === maior)  break;
      }
     console.log(maior);
     console.log(contador);