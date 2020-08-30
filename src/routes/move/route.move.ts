import express from "express";
const moveRoutes = express.Router();
import { ConfigService } from "../../services/service.config";
const config = ConfigService.getInstance().getConfig();
import  { ServiceDataHandler }  from "../../services/service.dataHandler";


const dataHander = ServiceDataHandler.getInstance();

moveRoutes.post('/save', (req, res, next)=>{
    const state  = req.body.data;
    console.log(state);

    dataHander.writeData(JSON.stringify(state)).then(saveRes=>{
        res.send(saveRes);
    });
});

moveRoutes.get('/get', (req, res, next)=>{
    dataHander.getData().then((data)=>{
        res.send(data);
    });
});


export = moveRoutes ;