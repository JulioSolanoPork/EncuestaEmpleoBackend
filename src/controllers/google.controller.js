let googleSheet = require('../spreadsheet');

const obtenerDatos = async (req, res) =>{
    let data= [];    
    registros = await googleSheet.accederGoogleSheet()
    for(item of registros){
        data.push({
            encuestador: item.Encuestador,
            expendio: item.Razon_Social,
            departamento: item.Departamento,
            ciudad: item.Ciudad,
            nit: item.Nit,
            direccion: item.Direccion
        })
    }
    res.send(data) 
}

const guardarRegistroExp = async (req, res) =>{
    googleSheet.guardarRegistroExpendio(req.body); 
    res.json({message: 'Ok'})
}

const guardarRegistroOtr = async (req, res) =>{
    googleSheet.guardarRegistroOtros(req.body); 
    res.json({message: 'Ok'})
}

module.exports = {
    obtenerDatos,
    guardarRegistroExp, 
    guardarRegistroOtr
}