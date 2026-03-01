//calculo de média com pesos e verificação de aprovação
// caso a nota final seja maior que 5, mas menor que 7, o aluno fará um exame, e a nota que ele tirar no exame será somada com a média inicial e dividida por 2, formando a média final
const fs = require ('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const linha1 = lines[0].split(' ');

const N1 = parseFloat(linha1[0]);
const N2 = parseFloat(linha1[1]);
const N3 = parseFloat(linha1[2]);
const N4 = parseFloat(linha1[3]);

const media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log ('Media: ' +  media.toFixed(1));

if (media >= 7) {
    console.log('Aluno aprovado.');
    
} else if (media < 5 ) {
    console.log('Aluno reprovado.');
    
} else {
    console.log('Aluno em exame.');
    
    const notaEX = parseFloat(lines[1]);
    console.log('Nota do exame: ' + notaEX.toFixed(1));
    
    const mediaFinal = (media + notaEX) /2;
 
if(mediaFinal >= 5) {
console.log('Aluno aprovado.');
} else {
    console.log('Aluno reprovado.');}
    
 console.log('Media final: ' + mediaFinal.toFixed(1));}