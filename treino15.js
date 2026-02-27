//Ler grenais inter contra gremio (pode ser besteira de iniciante, mas pqp, é impossivel que o nivel de dificulade disso seja 1.8 na beecrowd)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let i = 0;
let inter = 0;
let gremio = 0;
let empate = 0;
let total = 0;

while (true) {
    let [gInter, gGremio] = lines[i].split(' ').map(Number);
    i++;
    total++;
    
    if (gInter > gGremio) {
        inter++;
    } else if (gGremio > gInter) {
        gremio++;
    } else {
        empate++;
    }
    
    console.log("Novo grenal (1-sim 2-nao)");
    let opcao = parseInt(lines[i]);
    i++;
    if (opcao === 2) break;
} 
console.log(`${total} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empate}`);
if (inter > gremio) {
    console.log(`Inter venceu mais`);
} else if (gremio > inter) {
    console.log(`Gremio venceu mais`);
} else { console.log('Nao houve vencedor'); }