import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id: String;

    @Column('text', { unique: true})
    title: String;

    @Column('text', { unique: true})
    isbn: String;

    @Column('int', { unique: true})
    pageCount: Number;

    @Column('text', { unique: true})
    publishedDate: String;

    @Column('text', { unique: true})
    thumbnailUrl: String;

    @Column('text', { unique: true})
    shortDescription: String;

    @Column('text', { unique: true})
    longDescription: String;

    @Column('text', { unique: true})
    status: String;

    @Column('int', { unique: true})
    precio: Number;
}
