import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
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
}
