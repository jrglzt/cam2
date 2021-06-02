"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegbackup = void 0;
//Traer el listado de backups realizado ordenando por fechabackup de la actual a la màs antigua
const getRegbackup = (req, res) => {
    //meramente informativo, puede traer los ultimos 50 o 100 registros
    res.json({
        msg: 'getRebackup'
    });
};
exports.getRegbackup = getRegbackup;
//# sourceMappingURL=regbackups.js.map