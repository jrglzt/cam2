import { Request, Response } from "express";

//Traer cantidad de misas para descargar (eliminar) 
export const getMisas = (req: Request , res: Response) => {
    
    const {fechaini} = req.params;
    const {fechafin} = req.params;
    res.json({
        msg: 'getMisas',
        fechaini,
        fechafin
    })
}

export const deleteMisas = (req: Request, res: Response) => {
    const {fechaini} = req.params;
    const {fechafin} = req.params;
    res.json({
        msg: 'deleteMisas',
        fechaini,
        fechafin
    })
}