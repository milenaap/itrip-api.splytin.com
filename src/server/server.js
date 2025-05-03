import express from 'express';
import cors from 'cors';
import authRoutes from '../routes/api/authRoutes.js';
import userRoutes from '../routes/api/userRoutes.js';
import categoryRoutes from '../routes/api/categoryRoutes.js';
import itemRoutes from '../routes/api/itemRoutes.js';
import { attachBaseController } from '../middlewares/attachBaseController.js';


export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/api/v1/auth',
            users: '/api/v1/users',
            categories: '/api/v1/categories',
            items: '/api/v1/items' 
        }

        // Midlewares
        this.midlewares();

        // Rutas app
        this.routes();
    }


    midlewares(){

        // Directorio publico
        this.app.use( express.static('public') );

        //Cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Form-data del body
        this.app.use(express.urlencoded({ extended: true })); // para form-data

        // BaseController
        this.app.use( attachBaseController );

    }


    routes(){
        
        this.app.use( this.path.auth , authRoutes);

        this.app.use( this.path.users , userRoutes);

        this.app.use( this.path.categories , categoryRoutes);

        this.app.use( this.path.items , itemRoutes);

        //TODO Others routes
        
    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}