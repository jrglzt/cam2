"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    login: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    clave: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.CHAR
    },
}, {
    timestamps: false,
    freezeTableName: true
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map