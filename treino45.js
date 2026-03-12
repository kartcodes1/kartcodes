//Calculando área de triângulo com valores das medianas
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');


for (let line of lines) {
    let [Ma, Mb, Mc] = line.split(' ').map(Number);
    let Sm = (Ma + Mb + Mc) / 2;
    let A =  4/3 * Math.sqrt(Sm * (Sm - Ma) * (Sm - Mb) * (Sm - Mc));
    if (Ma + Mb <=  Mc || Ma + Mc <= Mb || Mb + Mc <= Ma) {
        console.log((-1.000).toFixed(3));
    } else
    console.log(A.toFixed(3));
}