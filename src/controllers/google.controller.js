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

const obtenerDepartamentos = async (req, res) =>{
    let data= [];    
    registros = await googleSheet.accederDepartamentosSheet()
    for(item of registros){
        data.push({
            idDepto: item.Codigo_Departamento,
            departamento: item.Departamento,
            idMunicipio: item.Codigo_Municipio,
            municipio: item.Municipio,
        })
    }
    res.send(data) 
}

const guardarRegistroExp = async (req, res) =>{    
    googleSheet.guardarRegistroExpendio(req.body); 
    res.json({message: 'Ok'})
}

const guardarRegistroOtr = async (req, res) =>{
    console.log(req.body);
    googleSheet.guardarRegistroOtros(req.body); 
    res.json({message: 'Ok'})
}

module.exports = {
    obtenerDatos,
    obtenerDepartamentos,
    guardarRegistroExp, 
    guardarRegistroOtr
}