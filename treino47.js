//Carrega ou não carrega
const fs = require('fs');
const lines =  fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for( let line of lines) {
    let [a, b] = line.split(' ').map(BigInt);
    console.log((a ^ b).toString());
}