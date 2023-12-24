import { IsNotEmpty, IsString } from "class-validator";


export class  TaskDTO  {
    @IsString()
    @IsNotEmpty()
        readonly name:string
    
    @IsString()
    @IsNotEmpty()
        readonly description:string

    @IsString()
    @IsNotEmpty()
        readonly dirrection:string

}