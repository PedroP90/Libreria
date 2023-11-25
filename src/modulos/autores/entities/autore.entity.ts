import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Autore {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column('text', { unique: true})
    nombre: string;
}
