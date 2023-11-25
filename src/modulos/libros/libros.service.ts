import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {
  logger: any;

  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>
  ){
    
  }

  @Post()
  async create(createLibroDto: CreateLibroDto) {
    try{
      // el objeto (createAutoreDto) del controlador
      // lo prepara en el objeto (autor) para ser INSERTADO en el SGBD
      //console.log(createLibroDto);
      const libro = this.libroRepository.create(createLibroDto);

      // lanza la petición de inserción a la BD
      // Mapea Objeto autor <--> registro autor
      // insert into Autor(isbb, nombre) values ("1", "Glenn Smith")
      // aplica la librería de bd instalada en el proyecto --> librería de postgres pg
      
      await this.libroRepository.save(libro);
      return {
        msg: 'Registro Insertado',
        data: libro,
        status:200
      }
    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('sysadmin...');
    }
  }

  findAll() {
    return `This action returns all libros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }

  async deleteAllLibros(){
    const query = this.libroRepository.createQueryBuilder('libro');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin...')
    }
  }
}
