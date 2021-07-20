"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const express_validator_1 = require("express-validator");
const userRouter = express_1.Router();
//defino ahora mis endpoint y sus middlewares para validar antes de llamar el controlador
userRouter.post('/', express_validator_1.check('user', 'El usuario es obligatorio').not().isEmpty(), express_validator_1.check('cla', 'La contraseña es obligatorio').not().isEmpty(), usuarios_1.getUsuario);
exports.default = userRouter;
//# sourceMappingURL=usuario.js.map