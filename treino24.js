//Sequência interrompida
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let N = parseInt(lines[0]);

let numero = 1;

for (let i = 0; i < N; i++) {
    console.log(`${numero} ${numero+1} ${numero+2} PUM`);
    numero += 4;
}