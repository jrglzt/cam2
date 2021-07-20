"use strict";
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
exports.deleteMisas = exports.getMisas = void 0;
const express_validator_1 = require("express-validator");
const sequelize_1 = require("sequelize");
const misa_1 = __importDefault(require("../models/misa"));
//Traer cantidad de misas para descargar (eliminar) 
const getMisas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const { fechaini, fechafin } = req.body;
    //const {} = req.params;
    //convertir fechaini y fechafin  en objetos Date javascript
    let fechafin2 = fechafin + "T23:59:47.000Z";
    var jfechaini = new Date(fechaini);
    var jfechafin = new Date(fechafin2);
    console.log(jfechaini);
    console.log(jfechafin);
    const misas_cel = yield misa_1.default.findAll({
        where: {
            fecha_cel: {
                [sequelize_1.Op.between]: [jfechaini, jfechafin]
            }
        }
    });
    res.json({
        misas_cel,
        jfechaini,
        jfechafin
    });
});
exports.getMisas = getMisas;
const deleteMisas = (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const { fechaini, fechafin } = req.body;
    res.json({
        msg: 'deleteMisas',
        fechaini,
        fechafin
    });
};
exports.deleteMisas = deleteMisas;
//# sourceMappingURL=misas.js.map