import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './typeorm/entities/Task';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      synchronize: true,
      entities: [Task],
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
