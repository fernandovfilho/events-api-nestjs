import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default: "ADMIN",
  })
  role: string;

  @Column({
    type: "boolean",
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
