const fs = require('fs');

const crearArchivo = (base = 5, l = false) => {
    return new Promise((resolve, reject) => {
        console.log(`Tabla del ${base}`);
        const num1 = base;
        let salida = "";
        for (let num2 = 1; num2 <= 10; num2++) {
            salida += `${num2} x ${num1} = ${num2 * num1}\n`;
        }
        if (l) {
            console.log(salida);
        }

        fs.writeFile(`tabla-del-${num1}.txt`, salida, (err) => {
            if (err) {
                reject(err); // Rechaza la promesa en caso de error.
            } else {
                resolve(`tabla-del-${num1}.txt`); // Resuelve la promesa con el nombre del archivo creado.
            }
        });
    });
}

module.exports = {
    crearArchivo
}
