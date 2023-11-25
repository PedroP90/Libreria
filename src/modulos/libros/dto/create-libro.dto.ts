import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateLibroDto {
    @IsString()
    @MinLength(1)
    id: String;

    @IsString()
    title: String;

    @IsString()
    isbn: String;

    @IsNumber()
    pageCount: Number;

    @IsString()
    publishedDate: String;

    @IsString()
    @IsOptional()
    thumbnailUrl: String;

    @IsString()
    @IsOptional()
    shortDescription: String;

    @IsString()
    @IsOptional()
    longDescription: String;

    @IsString()
    status: String;

    @IsNumber()
    precio: Number;
}
