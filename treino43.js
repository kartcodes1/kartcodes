//Sequência S 2
let S = 0;
let numerador = 1;
let denominador = 1;

while (numerador <= 39 ) {
    S += numerador/denominador;
    numerador += 2;
    denominador *= 2;
}
console.log(S.toFixed(2));