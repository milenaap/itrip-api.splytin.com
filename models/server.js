import express from 'express';
import cors from 'cors';


export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

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
        
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            });
        });

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'post API'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            });
        });


        this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API'
            });
        });
    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}