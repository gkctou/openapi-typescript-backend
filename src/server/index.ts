import OpenAPIBackend from 'openapi-backend';
import path from 'path';
// create api with your definition file or object
const api = new OpenAPIBackend({ definition: path.resolve(__dirname, '../api/petstore.yaml') });

import { operations } from './schema';
import { createHandlers } from './handlers';
const handlers = createHandlers<operations>({
    listPets: (c, req, res) => {
        c.request.query.limit
        res.status(200).json([{ id: 1, name: 'ppt' }]);
    },
    createPets: (c, req, res) => {
        res.status(201);
    },
    showPetById: (c, req, res) => {
        res.status(200).json({ id: 1, name: 'ppt' });
    }
});
// register your framework specific request handlers here
api.register(handlers);

api.register({
    // listPets: (c, req, res) => {
    //     c.request.query.limit
    //     res.status(200).json([{ id: 1, name: 'ppt' }]);
    // },
    validationFail: (c, req, res) => res.status(400).json({ err: c.validation.errors }),
    notFound: (c, req, res) => res.status(404).json({ err: 'not found' }),
});

// initalize the backend
api.init();

import express from 'express';
import type { Request } from 'openapi-backend';

const app = express();
app.use(express.json());
app.use((req, res) => api.handleRequest(req as Request, req, res));
app.listen(9000, () => {
    console.log(`running on port http://127.0.0.1:9000`);
});
