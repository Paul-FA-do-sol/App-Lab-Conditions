const express = require('express');
const cors = require('cors');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.rutaUsuario = '/API/usuarios';
        //Middlewares
        this.middlewares(); 
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Lectura y parseo 
        this.app.use( express.json() );
        //Directorio de pagina html, el index
        this.app.use( express.static('Public'));
    }


    routes(){
        
        this.app.use( this.rutaUsuario, require('../Routes/usuario') );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto',this.port )
        })
    }
}




module.exports = Server;
