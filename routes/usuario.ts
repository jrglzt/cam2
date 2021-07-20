import { Router } from "express";
import { getUsuario } from "../controllers/usuarios";
import { check } from "express-validator";
const userRouter = Router();

//defino ahora mis endpoint y sus middlewares para validar antes de llamar el controlador
userRouter.post('/', 
check('user','El usuario es obligatorio').not().isEmpty(),
check('cla','La contraseña es obligatorio').not().isEmpty(),

getUsuario);


export default userRouter;