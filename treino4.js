function ImparOuPar (numero) {
if (typeof numero !== 'number' || isNaN (numero)) {
return "Entrada inválida. Digite um número."; }
return numero % 2 === 0 ? "par" : "ímpar"
}

console.log (ImparOuPar (8))
console.log (ImparOuPar(7))