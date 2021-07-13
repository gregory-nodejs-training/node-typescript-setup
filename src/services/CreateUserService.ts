import { User } from "@models/User";

interface IUserRequest {
    name: string;
    email: string;
}

class CreateUserService {

    async execute({ name, email } : IUserRequest): Promise<User> {
        const user = new User(name, email);
        return user;
    }
}

export { CreateUserService };