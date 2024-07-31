import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from 'src/tasks/dtos/Task.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    const tasks = this.tasksService.fetchTasks();
    return tasks;
  }

  @Post()
  postTask(@Body() TaskDto: TaskDto) {
    return this.tasksService.createTask(TaskDto);
  }

  @Put(':id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() taskDto: TaskDto,
  ) {
    await this.tasksService.updateTask(id, taskDto);
  }
}
