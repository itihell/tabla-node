const fs = require('fs');
const colors = require("colors")
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = ``
        let consola = ``
        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.green(base)} X ${colors.cyan(i)} = ${colors.blue(base * i)} \n`
            salida += `${base} X ${i} = ${base * i} \n`
        }

        if (listar) {
            console.log(colors.red(`===================`))
            console.log(colors.yellow(`Tabla del ${colors.green(base)}`))
            console.log(colors.blue(`===================`))
            console.log(consola)
        }

        const nameFile = `./salida/tabla-${base}.txt`

        fs.writeFileSync(nameFile, salida)

        return await nameFile
    } catch (error) {
        throw error
    }

}


module.exports = {
    crearArchivo
}