import express from "express";

import {ConfigService} from "../services/service.config";

import moveRoutes from './move/route.move';

const registeredRouters = express.Router();
const config = ConfigService.getInstance().getConfig();


/**
 * Common Routes
 */

registeredRouters.use('/api/move', moveRoutes);



export = registeredRouters ;


