import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
@Entity({ name: "services" })
export class Service {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column({ type: "uuid" })
  userId!: string;
  @Column({ type: "varchar" })
  title!: string;
  @Column({ type: "text" })
  description!: string;
  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;
  @Column({ type: "simple-array", nullable: true })
  images?: string[];
  @Column({ type: "simple-array", nullable: true })
  categories?: string;
  @CreateDateColumn()
  createdAt!: Date;
}
