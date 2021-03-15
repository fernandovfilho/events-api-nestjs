import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GHOST = "ghost",
}

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
    type: "enum",
    enum: UserRole,
    default: UserRole.ADMIN,
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
