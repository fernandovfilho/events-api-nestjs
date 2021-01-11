import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(Event)
export class UserRepository extends Repository<User> {}
