const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'numero base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        description: 'lista la tabla en consola'
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;