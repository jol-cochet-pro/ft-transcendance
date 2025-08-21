import { prisma } from "../../prisma";

export class User {
    id: string;
    username: string;

    constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }
}

export const findAll = async (): Promise<User[]> => {
    const res = await prisma.users.findMany();
    return res.map((el) => new User(el.id, el.username));
}