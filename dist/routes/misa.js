"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const misas_1 = require("../controllers/misas");
const router = express_1.Router();
//defino mis endpoint
router.get('/:fechaini/:fechafin', misas_1.getMisas);
router.delete('/:fechaini/:fechafin', misas_1.deleteMisas);
exports.default = router;
//# sourceMappingURL=misa.js.map