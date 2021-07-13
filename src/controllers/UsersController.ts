import { CreateUserService } from "@services/CreateUserService";
import { Request, Response } from "express";

const jsonBody = {
    name: "Gregory Feijon",
    email: "gregory.feijon@gregory.feijon.br"
};

export class UsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new CreateUserService();
        const user = await service.execute(jsonBody);
        return response.json(user);
    }
}