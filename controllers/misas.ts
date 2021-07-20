import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {DATE, Op} from "sequelize";
import Misa from "../models/misa";

//Traer cantidad de misas para descargar (eliminar) 
export const getMisas = async(req: Request , res: Response) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json(errors);
    }
    
    const {fechaini, fechafin} = req.body;
    //const {} = req.params;
    
    //convertir fechaini y fechafin  en objetos Date javascript
   
let fechafin2 = fechafin + "T23:59:47.000Z";   
var jfechaini = new Date(fechaini);
  var jfechafin = new Date(fechafin2);
  console.log(jfechaini);
  console.log(jfechafin);

    const misas_cel = await Misa.findAll({
        where: {
            fecha_cel: {
                [Op.between]: [jfechaini, jfechafin]
            }
            

        }
    })
    res.json({
        misas_cel,
        jfechaini,
        jfechafin
    })
}

export const deleteMisas = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json(errors);
    }
    
    const {fechaini, fechafin} = req.body;
    res.json({
        msg: 'deleteMisas',
        fechaini,
        fechafin
    })
}