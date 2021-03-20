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
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  phone: string;

  @Column({ nullable: false })
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
