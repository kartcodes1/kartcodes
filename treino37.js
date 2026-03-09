//Sequência S
let soma = 0;

for (let i = 1; i < 100; i++) {
    soma += 1 / i;
}
console.log((soma + 0.01).toFixed(2));