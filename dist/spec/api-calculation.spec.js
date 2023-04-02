"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_calculation_1 = require("../services/service.calculation");
const calculation = service_calculation_1.Calculation.GetInstance();
describe("Simple addition test", () => {
    it(" Gives result for two given positive inputs 10, 20 ", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield calculation.Add(10, 20);
        expect(result).toEqual(30);
        done();
    }));
    it(" Gives result for two given negetive inputs 10, -20 ", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield calculation.Add(10, -20);
        expect(result).toEqual(-10);
        done();
    }));
    it(" Gives result for two given random values ", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const num1 = calculation.GetRandomInt(10);
        const num2 = calculation.GetRandomInt(20);
        const result = yield calculation.Add(num1, num2);
        expect(result).toEqual(num1 + num2);
        done();
    }));
});
//# sourceMappingURL=api-calculation.spec.js.map