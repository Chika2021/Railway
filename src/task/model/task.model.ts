import { NestFactory } from "@nestjs/core";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Task {
    @Prop()
        name:string
    
    @Prop()
        description:string

    @Prop()
        durration:string

}

export const TaskSchema = SchemaFactory.createForClass(Task)