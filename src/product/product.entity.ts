import { Company } from "src/company/company.entity";
import { ProductCategory } from "src/product-category/product-category.entity";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: "money" })
  price: number;

  @ManyToOne(() => Company, (company) => company.products)
  company: Company;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products
  )
  productCategory: ProductCategory;
}
