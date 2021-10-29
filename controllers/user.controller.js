const {response, request} = require('express');

const usuariosGet = (req = request, res= response)=>{
    const {q, nombre } = req.query
    res.json({
        msg: 'get al api - controller',
        q,
        nombre
    });
}

const usuariosPut = (req = request, res= response)=>{
    const id = req.params.id;
    res.json({
        msg: 'Put al api - controller',
        id
    });
}

const usuariosPost = (req = request, res= response)=>{
    const body = req.body;
    res.json({
        msg: 'Post al api - controller',
        body: body
    });
}

const usuariosDelete = (req = request, res= response)=>{
    res.json({
        msg: 'Delete al api - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}