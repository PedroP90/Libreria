import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class CreateClienteDto {

    @PrimaryColumn()
    nif: string;

    @Column('text', { unique: false})
    nombre: string;

    @Column('text', { unique: false})
    apellido: string;

    @Column('text', { unique: false, nullable: true})
    direccion: string;

    @Column('text', { unique: false})
    localidad: string;


}
