import { ApiProperty } from "@nestjs/swagger";
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
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  password: string;

  @Column({
    default: "ADMIN",
  })
  @ApiProperty()
  role: string;

  @Column({
    type: "boolean",
    default: true,
  })
  @ApiProperty()
  active: boolean;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}
