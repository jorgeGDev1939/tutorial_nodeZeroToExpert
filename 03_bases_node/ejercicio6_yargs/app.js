const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
console.log('base yargs', argv.base);


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
