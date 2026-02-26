// localização de quadrante de plano cartesiano beecrowd 1115

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');




for (let i = 0; i < lines.length; i++ ) {
    
    const [X, Y] = lines[i].split(' ').map(Number);
    
    if (X === 0 || Y === 0) {
        break;
    } 
    if (X > 0 && Y > 0) {
    console.log('primeiro');
} else if (X > 0 && Y < 0) {
    console.log('quarto');
} else if (X < 0 && Y < 0){
    console.log('terceiro');
} else if (X < 0 && Y > 0) {
    console.log('segundo');
}
        
    
        
    } 

    