"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const jws = require('jsonwebtoken');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarJWT = (user = '') => {
    return new Promise((resolve, reject) => {
        const payload = { user };
        jsonwebtoken_1.default.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el tokeb');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.default = generarJWT;
//# sourceMappingURL=generar-jwt.js.map