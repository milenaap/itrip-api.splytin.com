import express from 'express';


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
        // Directorio publico
        this.app.use( express.static('public') );

    }


    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
        });
    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}