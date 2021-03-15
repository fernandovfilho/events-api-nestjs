import { Company } from "src/domains/company/company.entity";
import { Product } from "src/domains/product/product.entity";
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
