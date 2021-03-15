import { Company } from "src/company/company.entity";
import { Product } from "src/product/product.entity";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => Company, (company) => company.productCategories)
  company: Company;

  @OneToMany(() => Product, (product) => product.productCategory)
  products: Product[];
}
