import { Request, Response } from "express";

//Traer el listado de backups realizado ordenando por fechabackup de la actual a la màs antigua
export const getRegbackup = (req: Request , res: Response) => {
    
    //meramente informativo, puede traer los ultimos 50 o 100 registros
    res.json({
        msg: 'getRebackup'
    })
}