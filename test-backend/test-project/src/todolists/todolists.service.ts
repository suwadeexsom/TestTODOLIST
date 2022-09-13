import { Injectable } from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolistt } from './entities/todolist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodolistsService {
  constructor(
    @InjectRepository(Todolistt)
    private todolistsRepository: Repository<Todolistt>,
  ) {}
  
  create(createTodolistDto: CreateTodolistDto) {
    console.log(createTodolistDto)
    return this.todolistsRepository.save(createTodolistDto);
  
  }
  

  findAll() {
    return this.todolistsRepository.find();
  }

  findOne(id: number): Promise<Todolistt> {
    return this.todolistsRepository.findOneBy({ id });
  }


  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return this.todolistsRepository.update(id ,updateTodolistDto);
  }

  async remove(id: number): Promise<void> {
    await this.todolistsRepository.delete(id);
  }
}
