import { DataType, DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('Usuario', {
    login: {
       type: DataTypes.STRING,
       primaryKey: true 
    },
    clave: {
        type: DataTypes.STRING 
     },
    tipo: {
        type: DataTypes.CHAR
     },

}, {
    timestamps: false,
    freezeTableName: true
  },);

export default Usuario;