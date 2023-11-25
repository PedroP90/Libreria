import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autore } from './entities/autore.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AutoresService {

  constructor(
    @InjectRepository(Autore)
    private readonly autorRepository: Repository<Autore>
  ){
    
  }

  // Insertar los autores
  
  @Post()
  async create(createAutoreDto: CreateAutoreDto) {
    try{
      // el objeto (createAutoreDto) del controlador
      // lo prepara en el objeto (autor) para ser INSERTADO en el SGBD
      const autor = this.autorRepository.create(createAutoreDto);

      // lanza la petición de inserción a la BD
      // Mapea Objeto autor <--> registro autor
      // insert into Autor(isbb, nombre) values ("1", "Glenn Smith")
      // aplica la librería de bd instalada en el proyecto --> librería de postgres pg
      await this.autorRepository.save(autor);
      return {
        msg: 'Registro Insertado',
        data: autor,
        status:200
      };
    }catch(error){
      throw new InternalServerErrorException('Póngase en contacto con el Sysadmin')
    }
  }

  findAll() {
    return `This action returns all autores`;
  }

  // Buscar producto por su id
  findOne(id: number) {
    return `This action returns a #${id} autore`;
  }

  @Patch()
  update(id: number, updateAutoreDto: UpdateAutoreDto) {
    return `This action updates a #${id} autore`;
  }

  remove(id: number) {
    return `This action removes a #${id} autore`;
  }

  async deleteAllAutores(){
    const query = this.autorRepository.createQueryBuilder('autor');
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
