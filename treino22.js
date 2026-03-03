//tabuada dos números até o 10
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

let numero = parseInt(input);

let multi = [1,2,3,4,5,6,7,8,9,10];

let multiplicacao = 0;

for (let i = 0; i < multi.length; i++) {
    let multiplicacao = multi[i] * numero;
   console.log(multi[i] + ' x ' + numero + ' = ' + numero*multi[i]);
}