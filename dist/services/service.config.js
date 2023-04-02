"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const config_1 = __importDefault(require("../config"));
class ConfigService {
    constructor() { }
    ;
    static getInstance() {
        if (!ConfigService.configInstance) {
            ConfigService.configInstance = new ConfigService();
        }
        return ConfigService.configInstance;
    }
    getConfig() {
        return config_1.default;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=service.config.js.map