function verificar(numero) {
    if (numero > 70 || numero === 16 ||  numero === 17)
        return "Voto Facultativo";
    else if  (numero >= 18 && numero <= 70)
        return "Voto Obrigatório";
    else (numero < 16)
        return "Não Vota";
} 

    let verificação = verificar(20);

    console.log (verificação) 
