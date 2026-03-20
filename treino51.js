//Verificando se é ou não números primos
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let divisores = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        console.log(`${i} eh primo`);
    } else {
        console.log(`${i} nao eh primo`);
    }
}