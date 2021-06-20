import express from 'express';
import { UsersController } from '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333);
