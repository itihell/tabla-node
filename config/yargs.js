

const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Se toma el su valor para realizar la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        description: 'Se debe hasta que número se iterara la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Indica si se desea hacer una impresión en pantalla de la tabla'
    })

    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'Debe especificar un numero entero'
        }

        return true
    })
    .argv

module.exports = argv