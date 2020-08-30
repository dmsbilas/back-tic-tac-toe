import config from "../config";
import {InterfaceDataHandler} from "../interfaces/interface.dataHandler";
import * as fs from "fs";

export class ServiceDataHandler implements InterfaceDataHandler{

    private static dataHandler : ServiceDataHandler;
    private constructor(){};

    static getInstance(){
        if(! ServiceDataHandler.dataHandler){
            ServiceDataHandler.dataHandler = new ServiceDataHandler();
        }
        return ServiceDataHandler.dataHandler;
    }

    getData(): any {
        const file = 'move.json';
        return new Promise((resolve, reject)=>{
            fs.readFile('move.json', 'utf-8', (err, data) => {
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

    writeData(data): any {
        return new Promise((resolve, reject)=>{
            if(data){
                try {
                    fs.writeFileSync('move.json', data);
                    console.log("JSON data is saved.");
                    resolve(JSON.parse(data));
                } catch (error) {
                    console.error(error);
                    reject(error);
                }
            }

        });
    }

}

