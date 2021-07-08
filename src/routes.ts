import { Router } from "express";
import {UsersController} from '@controllers/UsersController';

const router = Router();

const userController = new UsersController();

router.get('/', (request, response) => {
    response.json({ message: 'Hello World' });
});

router.get('/users', userController.teste);

export { router };