//figurinhas
const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let N =  Number(input[0]);

function MDC(a, b) {
    while (b !== 0){
        let temp = b;
         b =  a % b;
        a = temp;
    }
    return a;
}
for (let i = 1; i <= N; i++ ) {
    let [f1, f2] = input[i].split(' ').map(Number);
    console.log (MDC(f1, f2));
}