//programa que calcula o consumo médio de cidades
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let i = 0;
let cidade = 1;

while(true) {
    let N = parseInt(input[i++]);
    if (N === 0) break;
    
    let mapa = {};
    let totalPessoas = 0;
    let totalConsumo = 0;
    
    for (let j = 0; j < N; j++) {
        let [X, Y] = input[i++].split(' ').map(Number);
        let consumo = Math.floor(Y / X);
        
        if (!mapa[consumo]) {
            mapa[consumo] = 0;
        }
        mapa[consumo] += X;
        
        totalPessoas += X;
        
        totalConsumo += Y;
    } 
    let consumos = Object.keys(mapa).map(Number).sort((a, b) => a - b);
    console.log(`Cidade# ${cidade}:`);
    let linha =  consumos.map(c => `${mapa[c]}-${c}`).join(' ');
    console.log(linha);
    let media = totalConsumo / totalPessoas;
    media = Math.floor(media * 100) / 100;
    console.log(`Consumo medio: ${media.toFixed(2)} m3.`);
    if (input[i] !== '0') {
        console.log();
    }
    cidade++;
}