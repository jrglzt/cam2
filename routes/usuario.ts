import { Router } from "express";
import { getUsuario } from "../controllers/usuarios";

const userRouter = Router();

//defino ahora mis endpoint
userRouter.post('/', getUsuario);


export default userRouter;