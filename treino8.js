//calculo de IMC, mas ainda não entendi bem o motivo de os textos desse código não aparecem, mas no próximo teste isso vai estar resolvido
function imc (peso, altura) 
    {
    return peso / (altura ** 2)}
    console.log(imc(60, 1.70))
 if (imc < 18.5) {
    console.log ("Você está abaixo do Peso: "  + imc)
}if  (imc >= 18,5 && imc < 25) {
    console.log ("Você está com o peso ideal: " + imc)
} if  (imc >= 25 && imc <30) { 
    console.log ("Você está com sobrepeso: " + imc)
}  if (imc >= 30 ) {
    console.log ("Você está com obesidade: " + imc)
} 


