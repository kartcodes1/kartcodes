//esse ficou bala, mas ainda tem o problema de que no output, depois do resultado esperado aparece um "undefined", esse problema vai ser estudado e eventualmente resolvido

function CalcularImc (peso, altura) {
    let Imc = peso / (altura ** 2);
 if (Imc < 18.5){
    console.log ('seu imc é ' + Math.floor(Imc) + ', você está abaixo do peso');
} else if ( Imc >= 18.5 && Imc < 25) { 
    console.log ('seu imc é ' + Math.floor(Imc) + ', você está com o peso ideal');
}else if (Imc >= 25 && Imc < 30 ) {
    console.log ('seu imc é ' + Math.floor(Imc) + ', você está com sobrepeso');
}else if (Imc >= 30) {
    console.log ('seu imc é ' + Math.floor(Imc) + ', você está com obesidade');
} }

const resultado = CalcularImc(80, 1.80);
console.log(resultado); 
