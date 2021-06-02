import { Router } from "express";
import { getRegbackup } from "../controllers/regbackups";


const router = Router();

//defino mis endpoint
router.get('/', getRegbackup);

export default router;