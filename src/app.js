const express = require('express');
/* const bodyParser = require('body-parser'); */
const cors = require('cors');

class App{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.expendiosPath = 'api/expendios';

         //middlewares
         this.middlewares();

         //routes
         this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo de codigo
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(require('./routes/google.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = App;