"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculation = void 0;
class Calculation {
    constructor() { }
    ;
    static GetInstance() {
        if (!Calculation.calc) {
            Calculation.calc = new Calculation();
        }
        return Calculation.calc;
    }
    Add(a, b) {
        return a + b;
    }
    GetRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.Calculation = Calculation;
//# sourceMappingURL=service.calculation.js.map