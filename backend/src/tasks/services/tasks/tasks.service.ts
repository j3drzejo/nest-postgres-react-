import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';
import { TaskParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  fetchTasks() {
    return this.taskRepository.find();
  }

  createTask(taskDetails: TaskParams) {
    const newTask = this.taskRepository.create({ ...taskDetails });

    return this.taskRepository.save(newTask);
  }

  updateTask(id: number, taskDetails: TaskParams) {
    return this.taskRepository.update({ id }, { ...taskDetails });
  }

  deleteTask(id: number) {
    return this.taskRepository.delete({ id });
  }
}
