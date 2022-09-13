import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistsModule } from './todolists/todolists.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todolistt } from './todolists/entities/todolist.entity';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'petpaw',
    entities: [Todolistt ],
    synchronize: true,
  }),TodolistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
