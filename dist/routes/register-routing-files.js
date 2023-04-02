"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const service_config_1 = require("../services/service.config");
const route_move_1 = __importDefault(require("./move/route.move"));
const registeredRouters = express_1.default.Router();
const config = service_config_1.ConfigService.getInstance().getConfig();
/**
 * Common Routes
 */
registeredRouters.use('/api/move', route_move_1.default);
module.exports = registeredRouters;
//# sourceMappingURL=register-routing-files.js.map