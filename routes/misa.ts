import { Router } from "express";
import { deleteMisas, getMisas } from "../controllers/misas";

const router =  Router();

//defino mis endpoint
router.get('/:fechaini/:fechafin',getMisas);
router.delete('/:fechaini/:fechafin',deleteMisas);

export default router;