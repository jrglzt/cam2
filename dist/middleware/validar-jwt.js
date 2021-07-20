"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req, res, next) => {
    //recuperando el token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }
    try {
        const { user } = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
};
exports.default = validarJWT;
//# sourceMappingURL=validar-jwt.js.map