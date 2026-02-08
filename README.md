## Input do Console
```js
let port = "olá, este repositório servirá apenas para guardar códigos que eu escrevo para práticar e melhorar minhas habilidades na programação, então se tiverem algumas dicas sobre como eu poderia otimizalos ou simplismente melhorar eles de alguma forma, sintam-se livres para comentar, ficarei feliz em ler todos eles e aprender com vocês como melhorar na programação."

let ing = "hello, this repository will serve only to store codes that I write to practice and improve my programming skills, so if you have any tips on how I could optimize them or simply improve them in some way, feel free to comment, I will be happy to read them all and learn with you guys how to improve as a programmer."

function selectlenguage(opcao) {
    if (opcao === 1) {
        return port;
    } else if (opcao === 2) {
        return ing;
    } else {
        return "opção inválida, por favor selecione 1 para português ou 2 para inglês.";
    }
}

let portuguese = selectlenguage(1);
console.log(portuguese);

console.log("\n===========================================================================================================================\n");

let english = selectlenguage(2);
console.log(english);
```
## Output do Console
```txt
olá, este repositório servirá apenas para guardar códigos que eu escrevo para práticar e melhorar minhas habilidades na programação, então se tiverem algumas dicas sobre como eu poderia otimizalos ou simplismente melhorar eles de alguma forma, sintam-se livres para comentar, ficarei feliz em ler todos eles e aprender com vocês como melhorar na programação.
===========================================================================================================================
hello, this repository will serve only to store codes that I write to practice and improve my programming skills, so if you have any tips on how I could optimize them or simply improve them in some way, feel free to comment, I will be happy to read them all and learn with you guys how to improve as a programmer.
```
