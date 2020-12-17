import express from 'express';
import {celebrate, Joi} from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import path from 'path';
import knex from './database/connection';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

// index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:_id', pointsController.show);
routes.post('/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    },{
        abortEarly: false
    }),
    pointsController.create
);




export default routes;