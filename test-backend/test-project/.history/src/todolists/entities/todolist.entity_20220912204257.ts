
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';


@Entity()
export class Todolistt extends BaseEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  created_at: Date;

  @Column({ default: false })
  active: boolean;

  @OneToMany(() => TodoItem, { nullable: true })
  @JoinColumn({
    name: "list_id",
    referencedColumnName: "id"
  });




}
