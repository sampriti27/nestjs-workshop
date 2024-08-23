import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {
    @IsNotEmpty()
    task: string

    @IsOptional()
    @IsString()
    description?: string
}
