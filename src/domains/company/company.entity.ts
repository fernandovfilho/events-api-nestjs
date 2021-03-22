import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { User } from "../auth/user.entity";
import { ProductCategory } from "../product-category/product-category.entity";
import { Product } from "../product/product.entity";

@Entity()
@Unique(["cpfCnpj"])
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: false })
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  phone: string;

  @Column({ nullable: false })
  @ApiProperty()
  cpfCnpj: string;

  @OneToOne(() => User)
  @JoinColumn()
  userAdmin: User;

  @OneToMany(
    () => ProductCategory,
    (productCategory) => productCategory.company
  )
  productCategories: ProductCategory[];

  @OneToMany(() => Product, (product) => product.company)
  products: Product[];
}
