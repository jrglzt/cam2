"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const misas_1 = require("../controllers/misas");
const router = express_1.Router();
//defino mis endpoint
router.get('/', express_validator_1.check('fechaini', 'La fecha inicial es obligatorio').not().isEmpty(), express_validator_1.check('fechafin', 'La fecha final es obligatorio').not().isEmpty(), 
/* check('fechaini','La fecha inicial debe ser AAAA/MM/DD').not().isDate(),
check('fechafin','La fecha final debe ser AAAA/MM/DD').not().isDate(), */
misas_1.getMisas);
router.delete('/', express_validator_1.check('fechaini', 'La fecha inicial es obligatorio').not().isEmpty(), express_validator_1.check('fechafin', 'La fecha final es obligatorio').not().isEmpty(), misas_1.deleteMisas);
exports.default = router;
//# sourceMappingURL=misa.js.map