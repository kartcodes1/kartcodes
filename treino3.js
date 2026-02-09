// função para calcular as raízes de uma equação quadrática
function calcularRaizes (a,b,c,) {
    let Delta = b**2 - 4*a*c; // calculo do delta
    if (Delta < 0) {
         return "Não existem raízes reais";}  // se delta for negativo, não existem raízes reais, támbem pode ser representado como "raizes complexas"
    
let raiz1 = ( - b + Math.sqrt(Delta)) / (2*a); // calculo da raiz 1
let raiz2 = ( - b - Math.sqrt(Delta)) / (2*a); //calculo da raiz 2
return [raiz1, raiz2]; // retorna as raízes em um array

} console.log (calcularRaizes(1, 0, 0)); // exemplo de uso da função, deve retornar as raízes 0 e -0, não sei como pode existir uma raiz negativa de zero, mas aconteceu, e aparentemente é possivel