import { DataTypes } from "sequelize";
import db from "../db/connection";

const Regbackup = db.define('Regbackup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fechabackup: {
        type: DataTypes.DATE
    },
    fechaini: {
        type: DataTypes.DATE
    },
    fechafin: {
        type: DataTypes.DATE
    },
    descripcion: {
        type: DataTypes.STRING
    },

}, {
    timestamps: false,
    freezeTableName: true
  });

  export default Regbackup;