//Sequência IJ 4
let i = 0;

while (i <= 2.0001) {
    
    let j = 1;

   while(j <= 3) {
       
       let valorJ = i + j;
       
       let valoriformatado = Number.isInteger(i) ? i.toFixed(0) : i.toFixed(1);
       let valorjformatado = Number.isInteger(valorJ) ? valorJ.toFixed(0) : valorJ.toFixed(1);
       
       console.log(`I=${valoriformatado} J=${valorjformatado}`);
          j++;
  } 
  i += 0.2;
  
  i = Math.round(i*10)/10;
  
}