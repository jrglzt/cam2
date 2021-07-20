"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Misa = connection_1.default.define('Misa', {
    item: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    coded: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha_reg: {
        type: sequelize_1.DataTypes.DATEONLY
    },
    fecha_cel: {
        type: sequelize_1.DataTypes.DATE
    },
    codtipomisa: {
        type: sequelize_1.DataTypes.INTEGER
    },
    intencion: {
        type: sequelize_1.DataTypes.STRING
    },
    valor: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    dirigidoa: {
        type: sequelize_1.DataTypes.STRING
    },
    pagadopor: {
        type: sequelize_1.DataTypes.STRING
    },
    nmisas: {
        type: sequelize_1.DataTypes.INTEGER
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING
    },
    fh: {
        type: sequelize_1.DataTypes.DATE
    },
    fhm: {
        type: sequelize_1.DataTypes.DATE
    },
    usuariom: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false,
    freezeTableName: true
});
exports.default = Misa;
//# sourceMappingURL=misa.js.map