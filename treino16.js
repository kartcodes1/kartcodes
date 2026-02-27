//Validando notas
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
let i = 0;
let soma = 0;
let contador = 0;

while (true) {
    let notas = parseFloat(lines[i]);
    i++;
    if (notas >= 0 && notas <= 10) {
        soma += notas;
        contador++;
    } else { console.log('nota invalida');}
    if (contador === 2) {
        let media = soma / 2;
        console.log(`media = ${media.toFixed(2)}`);
        let opcao;
        do { 
            console.log('novo calculo (1-sim 2-nao)');
             opcao = parseInt(lines[i]);
            i++;
    } while (opcao !== 1 && opcao !== 2);
    
    if (opcao === 2) break;
    
    soma = 0;
    contador = 0;
}
    
}