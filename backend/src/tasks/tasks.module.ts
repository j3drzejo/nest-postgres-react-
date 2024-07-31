import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks/tasks.service';
import { TasksController } from './controllers/tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
