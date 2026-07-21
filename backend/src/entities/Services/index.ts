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
  @Column({ type: "text", nullable: true })
  description!: string;
  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  price!: number;
  @Column({ type: "simple-array", nullable: true })
  images?: string[];
  @Column({ type: "simple-array", nullable: true })
  category?: string[];
  @CreateDateColumn()
  createdAt!: Date;
}
