"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Regbackup = connection_1.default.define('Regbackup', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    fechabackup: {
        type: sequelize_1.DataTypes.DATE
    },
    fechaini: {
        type: sequelize_1.DataTypes.DATE
    },
    fechafin: {
        type: sequelize_1.DataTypes.DATE
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false,
    freezeTableName: true
});
exports.default = Regbackup;
//# sourceMappingURL=regbackup.js.map