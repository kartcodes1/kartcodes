//Resto de divisão
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
    let num = 0;
    let inicio = Math.min(x,y);
    let fim = Math.max(x,y);
    
    for (let j = inicio + 1; j < fim; j++) {
        if (j % 5 === 2 || j % 5 === 3) {
           console.log(j);
        }
    }
    
