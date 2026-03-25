//Probabilidade de vitória em rpg
const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin', 'utf8');
const lines =  input.trim().split('\n');

for (let line of lines) {
    let [v1, v2, at, D] = line.split(' ').map(Number);
    
    if (v1 === 0 && v2 === 0 && at === 0 && D === 0) break;
    
     v1 = Math.ceil(v1 / D);
    v2 = Math.ceil(v2 / D);
    
    let p = at/6;
    let q = 1 - p;
    
    let prob;
    
    if (p === 0.5){
        prob = v1 / (v1 + v2);
    } else {
    let ratio = q/p;
    prob = (1 - Math.pow(ratio, v1))
    / (1 - Math.pow(ratio, v1 + v2));
     }
    console.log((prob * 100).toFixed(1));
}
