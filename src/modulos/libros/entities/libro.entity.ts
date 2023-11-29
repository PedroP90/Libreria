import { Autore } from "src/modulos/autores/entities/autore.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Libro {

    @PrimaryColumn('text', {
        unique: true
    })
    isbn: string;

    @Column('text', {
        unique: true
    })
    title: string;

    @Column({
        type: 'int',
        default: 0
    })
    pageCount: number;

    @Column('date')
    publishedDate?: string;

    @Column('text')
    thumbnailUrl?: string;

    @Column('text', { 
        nullable: true
    })
    shortDescription?: string;

    @Column('text', { 
        nullable: true
    })
    longDescription?: string;

    @Column('text')
    status: string;

    @Column('int', {
        nullable:true
    })
    precio: number;

    // Relación con autore entity
    // Muchos libros pertenecen a un mismo autor
    @ManyToOne(
        () => Autore,
        (autor) => autor.libros,
        {cascade: true}
    )
    // ? permite contener nulos
    autor?: Autore
}
