import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333);
