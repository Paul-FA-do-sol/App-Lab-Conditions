const { Router } = require('express');

const { getUsuario, 
        postUsuario, 
        putUsuario, 
        deleteUsuario } = require('../Controllers/usuarios');


const ruta = Router();

ruta.get('/', getUsuario);

ruta.post('/', postUsuario);

ruta.put('/:id', putUsuario);

ruta.delete('/', deleteUsuario);

module.exports = ruta;