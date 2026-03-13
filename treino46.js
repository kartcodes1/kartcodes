//Calculando posição de objeto
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin','utf8').trim().split(/\s+/);

let i = 0;
let T = parseInt(input[i++]);

for (let c = 1; c <= T; c++) {

    let x1 = parseFloat(input[i++]);
    let y1 = parseFloat(input[i++]);

    let x2 = parseFloat(input[i++]);
    let y2 = parseFloat(input[i++]);

    let x3 = parseFloat(input[i++]);
    let y3 = parseFloat(input[i++]);

    let x4 = parseFloat(input[i++]);
    let y4 = parseFloat(input[i++]);

    let mx1 = (x1 + x3) / 2;
    let my1 = (y1 + y3) / 2;

    let mx2 = (x2 + x4) / 2;
    let my2 = (y2 + y4) / 2;

    let m1 = (y3 - y1) / (x3 - x1);
    let m2 = (y4 - y2) / (x4 - x2);

    let p1 = -1 / m1;
    let p2 = -1 / m2;

    let X = (p1 * mx1 - p2 * mx2 + my2 - my1) / (p1 - p2);
    let Y = p1 * (X - mx1) + my1;

    console.log(`Caso #${c}: ${X.toFixed(2)} ${Y.toFixed(2)}`);
}