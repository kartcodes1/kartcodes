const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const linha = lines[0].split(' ').map(Number);

const hi = linha[0];
const mi = linha[1];
const hf = linha[2];
const mf = linha[3];

const inicio = hi * 60 + mi;
const fim = hf * 60 + mf;

let duracao = fim - inicio;

if (duracao <= 0) {
    duracao += 24 * 60;
}

let horas = Math.floor(duracao/60);
let minutos = duracao % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);