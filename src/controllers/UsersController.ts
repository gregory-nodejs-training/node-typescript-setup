import { User } from "@models/User";
import { Request, Response } from "express";

export class UsersController {
    async teste(request: Request, response: Response): Promise<Response> {
        const user = new User("Gregory Feijon", "gregory.feijon@gregory.feijon.br");
        return response.json(user);
    }
}