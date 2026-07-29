import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Subcategory } from "../subcategory/Subcategory.entity.js";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  password!: string;

  @Column({ type: "varchar", default: "user" })
  role!: string;

  @Column({ type: "varchar", nullable: true })
  phoneNumber!: string;
 
  @Column({ type: "varchar", nullable: true })
  address!: string;

  @ManyToMany(() => Subcategory, (sub) => sub.user)
  @JoinTable({ name: "craftsman_services" })
  subcategories!: Subcategory[];
  category: any;
}
