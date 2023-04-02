"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDataHandler = void 0;
const express_1 = __importDefault(require("express"));
class ServiceDataHandler {
    constructor() { }
    ;
    static getInstance() {
        if (!ServiceDataHandler.dataHandler) {
            ServiceDataHandler.dataHandler = new ServiceDataHandler();
        }
        return ServiceDataHandler.dataHandler;
    }
    getData() {
        const file = 'move.json';
        return new Promise((resolve, reject) => {
            express_1.default.readFile('move.json', 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                    throw err;
                }
                // parse JSON object
                const state = JSON.parse(data.toString());
                // print JSON object
                console.log(state);
                resolve(state);
            });
        });
    }
    writeData(data) {
        return new Promise((resolve, reject) => {
            if (data) {
                try {
                    express_1.default.writeFileSync('move.json', data);
                    console.log("JSON data is saved.");
                    resolve(JSON.parse(data));
                }
                catch (error) {
                    console.error(error);
                    reject(error);
                }
            }
        });
    }
}
exports.ServiceDataHandler = ServiceDataHandler;
//# sourceMappingURL=service.dataHandler.js.map