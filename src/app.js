const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

class App{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.credential =  process.env.CREDENTIALS;

        
        this.expendiosPath = 'api/expendios';

        this.app.use(bodyParser.urlencoded({ extended: true}));

         //middlewares
         this.middlewares();

         //routes
         this.routes();
    }

    middlewares(){
        //CORS
        /* var corsOptions = {
            origin: 'https://encuesta-3275f.web.app',
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            optionSuccessStatus: 200
        } */
        this.app.use(cors());

        //Lectura y parseo de codigo
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());

        //Directorio publico
        const publicPath = path.resolve(__dirname, '../public')
        this.app.use(express.static( publicPath ));
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