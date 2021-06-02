"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const userRouter = express_1.Router();
//defino ahora mis endpoint
userRouter.post('/', usuarios_1.getUsuario);
exports.default = userRouter;
//# sourceMappingURL=usuario.js.map