//Contagem de digitos
const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin',  'utf8').trim().split('\n');

function countDigits(n) {
    let count = Array(10).fill(0);

    for (let fator = 1; fator <= n; fator *= 10) {
        let lower = n%fator;
        let current = Math.floor(n / fator) % 10;
        let higher = Math.floor(n / (fator * 10));
         for (let d = 0; d <= 9; d++) {
             count[d] += higher * fator;
             if (d < current) count[d] += fator;
             else if (d === current) count[d] += lower + 1;
         }
         count[0]-= fator;
    }
    return count;
}
for (let line of input) {
    let [A, B] = line.split(' ').map(Number);
    if (A === 0 && B === 0) break;

    let countB =  countDigits(B);
    let countA = countDigits(A - 1);

    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(countB[i] - countA[i]);
    }
    console.log(result.join(' '));
}