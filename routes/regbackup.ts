import { Router } from "express";
import { getRegbackup } from "../controllers/regbackups";
import validarJWT from "../middleware/validar-jwt";


const router = Router();

//defino mis endpoint
router.get('/', 
            validarJWT,
            
            getRegbackup);


export default router;