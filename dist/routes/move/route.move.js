"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const moveRoutes = express_1.default.Router();
const service_config_1 = require("../../services/service.config");
const config = service_config_1.ConfigService.getInstance().getConfig();
const service_dataHandler_1 = require("../../services/service.dataHandler");
const dataHander = service_dataHandler_1.ServiceDataHandler.getInstance();
moveRoutes.post('/save', (req, res, next) => {
    const state = req.body.data;
    console.log(state);
    dataHander.writeData(JSON.stringify(state)).then(saveRes => {
        res.send(saveRes);
    });
});
moveRoutes.get('/get', (req, res, next) => {
    dataHander.getData().then((data) => {
        res.send(data);
    });
});
module.exports = moveRoutes;
//# sourceMappingURL=route.move.js.map