import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "../company/company.entity";
import { Product } from "../product/product.entity";

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
