import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './model/task.dto';
import { Task } from './model/task.model';

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Get()
    getValue() {
        return this.taskService.getAllTask()
    }

    @Post()
    createTaskValue(@Body() task:Task , id:number){
        return this.taskService.createTask(task)
    }


}
