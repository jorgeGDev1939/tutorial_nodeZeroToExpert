const fs = require('fs');

let num2 = 5;
let salida = ""
for (let num1 = 1; num1 <= 10; num1++) {
    
    salida += `${num1} x ${num2} = ${num1 * num2}\n`;
}
fs.writeFile('tabla del 5.txt', salida, (err) => {
  if (err) throw err;
  console.log('Se ha creado el archivo');
});