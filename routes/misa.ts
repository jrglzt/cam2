import { Router } from "express";
import { check } from "express-validator";
import { deleteMisas, getMisas } from "../controllers/misas";

const router =  Router();

//defino mis endpoint
router.get('/',
check('fechaini','La fecha inicial es obligatorio').not().isEmpty(),
check('fechafin','La fecha final es obligatorio').not().isEmpty(),
/* check('fechaini','La fecha inicial debe ser AAAA/MM/DD').not().isDate(),
check('fechafin','La fecha final debe ser AAAA/MM/DD').not().isDate(), */
getMisas);


router.delete('/',
check('fechaini','La fecha inicial es obligatorio').not().isEmpty(),
check('fechafin','La fecha final es obligatorio').not().isEmpty(),
deleteMisas);

export default router;