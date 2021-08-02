const { response } = require('express');



const getUsuario = (req, res = response) =>{
    res.json({
        msg: 'get API a travez de la carpeta controllers'
    });
}

const postUsuario = (req, res = response) =>{

    const body = req.body;

    res.json({
        msg: 'post API a travez de la carpeta controllers',
        body
    });
}

const putUsuario = (req, res = response) =>{
    res.json({
        msg: 'put API a travez de la carpeta controllers'
    });
}

const deleteUsuario = (req, res = response) =>{
    res.json({
        msg: 'delete API a travez de la carpeta controllers'
    });
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}