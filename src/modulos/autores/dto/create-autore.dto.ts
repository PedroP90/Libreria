import { IsString, MinLength} from "class-validator";


export class CreateAutoreDto {

    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(10)
    nombre: string;
}
