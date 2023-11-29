import { Libro } from 'src/modulos/libros/entities/libro.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';


@Entity()
export class Autore {

    @PrimaryColumn('text',{
        nullable: false,
    }) 
    nif: string;

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;

    // Relación con libros entity
    // Un libro tiene muchos autores
    @OneToMany(
        () => Libro,
        (libro) => libro.autor
    )
    libros?: Libro[] //campo virtual del framework
}

