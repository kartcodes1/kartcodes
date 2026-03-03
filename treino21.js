//Tipos de combustivel
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
let i = 0;
let alcool = 0;
let gas = 0;
let diesel = 0;
while (true) {
    let numeros = parseInt(lines[i]);
     i++;
     if (numeros === 1) {
         alcool++;
     } else if (numeros === 2) {
         gas++;
     } else if (numeros === 3) {
         diesel++; 
    } else if (numeros === 4) {
        break; }
     
    }    console.log('MUITO OBRIGADO'); 
         console.log(`Alcool: ${alcool}`);
         console.log(`Gasolina: ${gas}`);
         console.log(`Diesel: ${diesel}`);
      