import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/userRoutes.js';


export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        // Midlewares
        this.midlewares();

        // Rutas app
        this.routes();
    }



    midlewares(){

        //Cors
        this.app.use( cors() ) 

        // Lectura y parseo del body
        this.app.use( express.json() )

        // Directorio publico
        this.app.use( express.static('public') );

    }


    routes(){
        
        this.app.use( this.userPath , userRoutes)

        //TODO Others routes
        
    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}