import { createConnection } from "typeorm";
import User from "./db/entity/user";
import config from "./ormconfig";

async function main() {
    const conn = await createConnection(config as any);
    const UserRepository = conn.getRepository(User);
    const user = await UserRepository.createQueryBuilder()
            .addSelect('User.password')
            .getOne();
    console.log(user);
}
main();

