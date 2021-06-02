"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regbackups_1 = require("../controllers/regbackups");
const router = express_1.Router();
//defino mis endpoint
router.get('/', regbackups_1.getRegbackup);
exports.default = router;
//# sourceMappingURL=regbackup.js.map