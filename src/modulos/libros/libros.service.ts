import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LibrosService {
  
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
    private readonly autoresService: AutoresService
  ){
    
  }

 
  async create(createLibroDto: CreateLibroDto) {
    try{
      const {autor, ...campos } = createLibroDto;
      const libro = this.libroRepository.create({...campos});
      const autorobj = await this.autoresService.findOne(autor);
      libro.autor = autorobj; // dirección del objeto autor relacionado con libros
      
      await this.libroRepository.save(libro);
      return {
        msg: 'Libro correctamente insertado',
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
