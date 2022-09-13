
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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




}
