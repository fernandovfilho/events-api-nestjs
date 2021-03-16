import { Company } from "src/domains/company/company.entity";
import { ProductCategory } from "src/domains/product-category/product-category.entity";
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

  @Column({ type: "float" })
  price: number;

  @ManyToOne(() => Company, (company) => company.products)
  company: Company;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products
  )
  productCategory: ProductCategory;
}
