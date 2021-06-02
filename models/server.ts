import express, {Application} from "express";
import  userRouter  from "../routes/usuario";
import  misaRouter  from "../routes/misa";
import  regbackupRouter  from "../routes/regbackup";


import cors from "cors";
import db from "../db/connection";



class Server {
    private app: Application;
    private port: string; //| undefined;
    private apiPaths = {
        usuarios: '/api/usuarios',
        misas: '/api/misas',
        regbackups: '/api/regbackups'
    }

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        
        //middlewares
        this.middlewares();

        //rutas
        this.routes();
    }

    //conexion bd
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database Online');

            
        } catch (error) {
            throw new Error(error);
        }
    }

    //son funciones que se van a ejecutar antes de que pasen a las rutas
    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura del body
        this.app.use( express.json());


        //Carpeta pùblica
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRouter);
        this.app.use(this.apiPaths.misas, misaRouter);
        this.app.use(this.apiPaths.regbackups, regbackupRouter);

        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en puerto !!!' + this.port);
            
        })
    }

}

export default Server;