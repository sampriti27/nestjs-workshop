import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService){}

  async create(createTodoDto: CreateTodoDto): Promise<any> {
    try {
      const data: Prisma.TodoCreateInput = {
        description: createTodoDto.description,
        task: createTodoDto.task,
        status: 'ACTIVE',
      };
      console.log(data);
      return await this.databaseService.todo.create({ data });
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  async findAll(): Promise<any> {
    try {
      return await this.databaseService.todo.findMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<any> {
    return this.databaseService.todo.findFirst({
      where:{
        id: id
      }
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<any> {
    return await this.databaseService.todo.update({
      where: {
        id: id
      },
      data: updateTodoDto
    });
  }

  async remove(id: number): Promise<any> {
    return this.databaseService.todo.delete({
      where: {
        id: id
      }
    });
  }
}
