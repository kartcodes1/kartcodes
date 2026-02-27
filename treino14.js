// Validação de notas
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let contador = 0;
let soma = 0;

for (let i = 0; i < lines.length; i++) {
   let notas = parseFloat(lines[i]); 
   if (notas > 0 && notas <= 10){
    soma += notas;
       contador++;
   } else {
       console.log('nota invalida');
   } if (contador === 2) {
       let media = soma / 2;
       console.log(`media = ${media.toFixed(2)}`);
       break;
   }
} 