//Sequência lógica
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

const N = parseInt(input.trim());

for (let i = 1; i <= N; i++) {
    let quadrado = i*i;
    let cubo = i*i*i;
    
    console.log(`${i} ${quadrado} ${cubo}`);
    console.log(`${i} ${quadrado+1} ${cubo+1}`);
}