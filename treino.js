//calculando área do cilindro
 let pi = 3.14

function CalcularÁrea (pi, r, h)
{return "Área Total do Cilíndro = " + (r + h) * (pi * 2) * r }
function CalcularAB (pi, r)
{return "Área da Base do Cilíndro = " + (pi) * (r * r) }
function CalcularLateral (pi, r, h)
{return "Área Lateral do Cilíndro = " +  (pi * 2) * (r) * (h)}
let ÁreaLateral = CalcularLateral (pi, 3, 3)
console.log (ÁreaLateral)
let ÁreaTotal = CalcularÁrea ( pi, 3, 3)
console.log (ÁreaTotal)
let ÁreaDaBase = CalcularAB (pi, 3, 3)
console.log (ÁreaDaBase)