import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todolistt } from './entities/todolist.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Todolistt])],
  controllers: [TodolistsController],
  providers: [TodolistsService]
})
export class TodolistsModule {}
