import { Subcategory } from "../subcategory/Subcategory.entity.js";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { User } from "../user/user.entity.js";
@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column({ type: "varchar", unique: true })
  name!: string;
  @Column({ type: "text", nullable: true })
  description!: string;
  @Column({ unique: true })
  slug!: string;
  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories!: Subcategory[];
  @ManyToMany(() => User, (user) => user.category)
  user!: User[];

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    if (this.name) {
      this.slug = this.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
  }
}

// Express route using slug
// app.get('/api/categories/:slug', async (req, res) => {
//   const { slug } = req.params;
  
//   // Find category where slug matches "home-repairs"
//   const category = await categoryRepository.findOneBy({ slug });
  
//   if (!category) {
//     return res.status(404).json({ message: "Category not found" });
//   }

//   res.json(category);
// });
