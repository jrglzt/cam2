import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const validarJWT = (req: Request, res: Response, next:NextFunction) => {
    //recuperando el token
    const token = req.header('x-token');
    if(!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }
    try {
        
        const { user } = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '');
        req.user = user;



        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

export default validarJWT;