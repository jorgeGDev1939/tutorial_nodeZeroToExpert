// const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');

// const { options } = require('yargs');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Debe ser un numero';
        }
        return true;
    })
    .argv;



console.log('base yargs', argv.base);


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
