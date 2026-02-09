function Verificar (numero) {
    if (typeof numero !== 'number'|| isNaN (numero))
return ("Valor Inválido. Insira Um Número.")
if (numero > 0) {
    return ("O número é positivo")
}
if (numero === 0) {
    return ("O número é zero")
}
if (numero < 0 ) {
    return ("O número é negativo")
}}
console.log (Verificar (0))