//Sequências crescentes
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    
    let X = parseInt(lines[i]);
    
    if (X === 0) break;
    
    let linha = "";
    
 for (let j = 1; j <= X; j++) {
     linha += j + " ";
 }
 console.log(linha.trim());
}