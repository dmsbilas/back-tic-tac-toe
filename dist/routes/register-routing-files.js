"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const service_config_1 = require("../services/service.config");
// import moveRoutes from './move/route.move';
const registeredRouters = express_1.default.Router();
const config = service_config_1.ConfigService.getInstance().getConfig();
module.exports = registeredRouters;
//# sourceMappingURL=register-routing-files.js.map