"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regbackups_1 = require("../controllers/regbackups");
const validar_jwt_1 = __importDefault(require("../middleware/validar-jwt"));
const router = express_1.Router();
//defino mis endpoint
router.get('/', validar_jwt_1.default, regbackups_1.getRegbackup);
exports.default = router;
//# sourceMappingURL=regbackup.js.map