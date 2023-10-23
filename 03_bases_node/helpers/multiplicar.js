const fs = require('fs');


const crearArchivo = (base = 5)=>{
    console.log(`Tabla del ${base}`)
    const num1 = this.base;
    let salida = ""
    for (let num2 = 1; num2 <= 10; num2++) {
    
        salida += `${num2} x ${num1} = ${num2 * num1}\n`;
    }
    fs.writeFile(`tabla del ${num1}.txt`, salida, (err) => {
      if (err) throw err;
      console.log(`Se ha creado tabla de ${num1}.txt`);
    });
}

module.exports = {
    crearArchivo
}