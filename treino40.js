//intervalo
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const N = parseFloat(lines[0]);
const i1 = 'Intervalo [0,25]';
const i2 = 'Intervalo (25,50]';
const i3 = 'Intervalo (50,75]';
const i4 = 'Intervalo (75,100]';

if (N >= 0 && N <= 25) {
    console.log(i1);
} else if (N > 25 && N <= 50) {
    console.log(i2);
} else if (N > 50 && N <= 75) {
    console.log (i3);
} else if (N > 75 && N <= 100) {
    console.log(i4);
} else {
    console.log('Fora de intervalo');
}