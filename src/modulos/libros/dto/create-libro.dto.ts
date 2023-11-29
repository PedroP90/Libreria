import { IsIn, IsNumber, IsPositive, IsString, Length, MinLength } from "class-validator";


export class CreateLibroDto {

    @IsString()
    isbn: string;

    @IsString()
    @MinLength(3)
    title: string;

    @IsNumber()
    @IsPositive()
    pageCount: number;

    @IsString()
    publishedDate?: string;

    @IsString()
    thumbnailUrl?: string;

    @IsString()
    shortDescription?: string;

    @IsString()
    longDescription?: string;

    @IsString()
    @MinLength(1)
    @IsIn(['PUBLISH', 'UNPUBLISH'])
    status: string;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsString()
    @MinLength(1)
    autor?: string;


}
