
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';


@Entity()
export class Todolistt {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  created_at: Date;

  @Column({ default: false })
  active: boolean;

  /*@OneToMany(() => Todolistt, { TodoItem: true })
  @JoinColumn({
    name: "list_id",
    referencedColumnName: "id"
  });
*/



}
