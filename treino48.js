//Tipo de dado abstrato racional

const fs =  require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8');
const lines =  input.trim().split('\n');
//Definir numero de casos
let N = parseInt(lines[0]);
//Função de simplificação de funçôes
function mdc (a, b) {
    while (b !== 0) {
         let temp = b;
         b = a % b;
         a = temp;
    }
    //Retorna o valor sem sinais(negativos viram positivos e positivos continuam iguais)
    return Math.abs(a);
    }

//Loop que vai repetir da segunda linha até a linha cujo numero seja o mesmo que o valor de N
for (let i = 1; i <= N; i++) {
    //Pegando os valores de cada coluna e colocando eles em variaveis na ordem(espaço vazio entre virgulas para dar espaço aos caracteres, como '/' que são pedidos na entrada)
    let [n1, , d1, op, n2, ,d2 ] = lines[i].split(' ').map(x => isNaN(x) ? x : Number(x));
    //Variavel para armazenar o valor do numerador e do denominador a cada caso
    let num, den;
   //Calculando o numerador e o denominador em casa caso usando as equações mostradas na questão 
    if (op === '+') {
        num = n1 * d2 + n2 * d1;
        den = d1 * d2;
    } 
    if (op === '-') {
        num = n1 * d2 - n2 * d1;
        den = d1 * d2;
    }
    if (op === '*') {
        num = n1 * n2;
        den =  d1 * d2;
    }
    if (op === '/') {
        num = n1 * d2;
        den = n2 * d1;
    }
    //Usando a função criada para calcular o mdc, utilizando dos valores armazenados nas variaveis num(numerador) e den(denominadores)
        let divisor = mdc(num, den);
        //Simplificando os valores da variavél num
        let simpNum = num / divisor;
        //SImplificando os valores da variavél den
        let simpDen = den / divisor;
        //Imprimindo a saída no modelo exigido pela questão
        console.log(`${num}/${den} = ${simpNum}/${simpDen}`);
}