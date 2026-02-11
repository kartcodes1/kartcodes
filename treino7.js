//o mesmo código do treino5, só que mais organizado

function VerificarAprovacao (a, b) {
    const media = (a + b) / 2
    if (media >= 7) {
        return "O aluno está aprovado. " + "A média do aluno é " + media
    }if ( media >= 5 && media < 7) {
            return "O aluno está de recuperação. " + "A média do aluno é " + media
        }
     if (media < 5) {
        return "O aluno está reprovado. " + "A média do aluno é " + media
    } }
    console.log (VerificarAprovacao(6, 10))