"use strict";
//los controladores son funciones flecha 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = void 0;
const generar_jwt_1 = __importDefault(require("../helpers/generar-jwt"));
const usuario_1 = __importDefault(require("../models/usuario"));
//Traer usuario para validar 
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {user} = req.params;
    //const {cla} = req.params;
    const { user, cla } = req.body;
    //metodo chimbo , pues la contraseña no esta cifrada
    const usuario = yield usuario_1.default.findOne({ where: {
            login: user,
            clave: cla
        } });
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario o clave incorrectas'
        });
    }
    else {
        //generar JWT
        const token = yield generar_jwt_1.default(user);
        res.json({
            usuario,
            token
        });
    }
});
exports.getUsuario = getUsuario;
//# sourceMappingURL=usuarios.js.map