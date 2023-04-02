"use strict";
// import request from "request";
//
//
// const getUrl = "http://localhost:3000/api/move/get";
//
// describe("GET Status should return 200 ", ()=> {
//     it("returns status code 200", (done)=> {
//         request.get(getUrl, (error, response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });
Object.defineProperty(exports, "__esModule", { value: true });
const service_dataHandler_1 = require("../services/service.dataHandler");
const dataHandler = service_dataHandler_1.ServiceDataHandler.getInstance();
const givenJsonText = '{"state":"stateData"}';
const givenJsonText2 = '';
describe("Data Write Service", () => {
    it("check if it writes valid data into file", (done) => {
        dataHandler.writeData(givenJsonText).then((returnedData) => {
            expect(givenJsonText).toBe(returnedData.toString());
        });
        done();
    });
    it("check if it writes invalid data into file", (done) => {
        dataHandler.writeData(givenJsonText2).then((returnedData) => {
            expect(givenJsonText2).toBe(returnedData.toString());
        });
        done();
    });
});
describe("Data Read Service", () => {
    it("check if can get data from file", (done) => {
        dataHandler.getData().then((returnedData) => {
            expect(givenJsonText).toBe(JSON.stringify(returnedData));
        });
        done();
    });
});
//# sourceMappingURL=api-read-write.spec.js.map