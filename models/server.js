import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user.js';


export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';

        // Midlewares
        this.midlewares();

        // Rutas app
        this.routes();
    }



    midlewares(){

        //Cors
        this.app.use( cors() ) 

        // Directorio publico
        this.app.use( express.static('public') );

    }


    routes(){
        
        this.app.use( this.userPath , userRoutes)
        
    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}