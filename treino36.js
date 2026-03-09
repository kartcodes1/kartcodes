//Sequência de fibonacci
const fs =  require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input.trim());

let a = 0;
let b = 1;

let resultado = "";

for (let i = 0; i < N; i++) {
    resultado += a;
    if (i < N-1) {
        resultado += " ";
    }
    let temp = a + b;
    a = b;
    b = temp;
}
console.log(resultado);