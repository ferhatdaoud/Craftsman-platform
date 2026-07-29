import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { User } from "../user/user.entity.js";
import { Category } from "../category/Category.entity.js";
@Entity("subcategories")
export class Subcategory {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column({ type: "varchar" })
  name!: string;

  @ManyToOne(() => Category, (category) => category.subcategories, {
    onDelete: "CASCADE",
  })
  category!: Category;

  @ManyToMany(() => User, (user) => user.subcategories)
  user!: User[];
}
 