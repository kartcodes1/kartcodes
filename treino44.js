//Flores de fogo
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

//Lendo uma linha do array lines de cada vez a cada loop
for (let line of lines) 

{
//Colocando os valores das linhas lidas a cada loop em váriaveis
let [R1, X1, Y1, R2, X2, Y2] = line.split(' ').map(Number);
//Calculo da distância
dist = Math.sqrt(Math.pow((X1 - X2), 2)  + Math.pow((Y1 - Y2), 2));
//Comparando os raios dos círculos
if (dist + R2 <= R1) {
//Mostrando o resultado dependendo do resultado da comparação dos raios
    console.log('RICO');
} else { console.log('MORTO');}
}