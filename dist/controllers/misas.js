"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMisas = exports.getMisas = void 0;
//Traer cantidad de misas para descargar (eliminar) 
const getMisas = (req, res) => {
    const { fechaini } = req.params;
    const { fechafin } = req.params;
    res.json({
        msg: 'getMisas',
        fechaini,
        fechafin
    });
};
exports.getMisas = getMisas;
const deleteMisas = (req, res) => {
    const { fechaini } = req.params;
    const { fechafin } = req.params;
    res.json({
        msg: 'deleteMisas',
        fechaini,
        fechafin
    });
};
exports.deleteMisas = deleteMisas;
//# sourceMappingURL=misas.js.map