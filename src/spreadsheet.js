const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId = '1u5EuK3A4bjluTVKA2pHR4S_0ZqS_eMEWsnKkfFRa7Ag';

async function accederGoogleSheet(){

    const documento1 = new GoogleSpreadsheet(googleId);
    await documento1.useServiceAccountAuth(credenciales);
    await documento1.loadInfo();

    const sheet = documento1.sheetsByIndex[0];
    const registros = await sheet.getRows();

    return registros;
}

async function guardarRegistroExpendio(pObjeto){
    const documento2 = new GoogleSpreadsheet(googleId);
    await documento2.useServiceAccountAuth(credenciales);
    await documento2.loadInfo();
    const sheet = documento2.sheetsByIndex[1];    
    await sheet.addRow(pObjeto)
}

async function guardarRegistroOtros(pObjeto){
    const documento2 = new GoogleSpreadsheet(googleId);
    await documento2.useServiceAccountAuth(credenciales);
    await documento2.loadInfo();
    const sheet = documento2.sheetsByIndex[2];    
    await sheet.addRow(pObjeto)
}


module.exports = {
    accederGoogleSheet: accederGoogleSheet,
    guardarRegistroExpendio: guardarRegistroExpendio,
    guardarRegistroOtros: guardarRegistroOtros
}