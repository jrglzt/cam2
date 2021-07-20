import { DataTypes } from "sequelize";
import db from "../db/connection";

const Misa = db.define('Misa', {
    item: {
        type: DataTypes.INTEGER,
        primaryKey: true
     },
     coded: {
        type: DataTypes.INTEGER 
     },
     fecha_reg: {
        type: DataTypes.DATEONLY
     },
     fecha_cel: {
        type: DataTypes.DATE
     },
     codtipomisa: {
        type: DataTypes.INTEGER 
     },
     intencion: {
        type: DataTypes.STRING 
     },
     valor: {
        type: DataTypes.DOUBLE 
     },
     dirigidoa: {
        type: DataTypes.STRING 
     },
     pagadopor: {
        type: DataTypes.STRING 
     },
     nmisas: {
        type: DataTypes.INTEGER 
     },
     usuario: {
        type: DataTypes.STRING 
     },
     fh: {
        type: DataTypes.DATE 
     },
     fhm: {
        type: DataTypes.DATE 
     },
     usuariom: {
        type: DataTypes.STRING 
     },
     
}, {
    timestamps: false,
    freezeTableName: true
  });


  export default Misa;