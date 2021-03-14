import { User } from "src/auth/user.entity";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique(["cpfCnpj"])
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cpfCnpj: string;

  @OneToOne(() => User)
  @JoinColumn()
  userAdmin: User;
}
