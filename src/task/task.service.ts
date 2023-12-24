import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './model/task.model';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

    getAllTask() {
        return this.taskModel.find()
    }

    createTask(task:Task) {
        const created = this.taskModel.create(task)
    }
    



}
