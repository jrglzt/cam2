

//los controladores son funciones flecha 

import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { DataTypes } from "sequelize/types";
import generarJWT from "../helpers/generar-jwt";
import Usuario from "../models/usuario";

//Traer usuario para validar 
export const  getUsuario = async(req: Request , res: Response) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    //const {user} = req.params;
    //const {cla} = req.params;
    const {user,cla} = req.body;

    
    //metodo chimbo , pues la contraseña no esta cifrada
    const usuario  = await Usuario.findOne({ where: 
        { 
            login: user ,
            clave: cla
        } });

    if(!usuario) {
        return res.status(404).json({
            error: 'Usuario o clave incorrectas'

        });
    }
    else{

        //generar JWT
        const token = await generarJWT(user);

        res.json({
            usuario,
            token
        });
    }
    
}