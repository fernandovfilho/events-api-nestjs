import { User } from "src/domains/auth/user.entity";
import { ProductCategory } from "src/domains/product-category/product-category.entity";
import { Product } from "src/domains/product/product.entity";
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
