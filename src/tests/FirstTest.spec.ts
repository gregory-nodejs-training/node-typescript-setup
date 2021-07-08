import { User } from "@models/User";

test('it should be ok', () => {
    const name = "Gregory Feijon";
    const email = "gregory.feijon@gregory.feijon.br";
    const user = new User(name, email);

    expect(user.name).toEqual(name);
});