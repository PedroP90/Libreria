import { Injectable } from '@nestjs/common';
//servicios
import { AutoresService } from '../autores/autores.service';
//archivos json
import * as seedAutores from '../seed/data/authors.json'
import * as seedLibros from '../seed/data/libros.json'
//interfaces
import { Autor } from '../autores/interfaces/autor.interface';
import { LibrosService } from '../libros/libros.service';
import { CreateLibroDto } from '../libros/dto/create-libro.dto';
import { Libro } from '../libros/interfaces/libro.interface';




@Injectable()
export class SeedService {
  constructor (
    private readonly autoreService: AutoresService,
    private readonly librosService: LibrosService
    ){}
  
  public async loadData(){
    this.autoreService.deleteAllAutores();
    this.librosService.deleteAllLibros();
    await this.insertNewAutores();
    await this.insertNewLibros();
  }

  private async insertNewAutores(){
    await this.autoreService.deleteAllAutores();

    const insertPromisesAutores = [];
    seedAutores.forEach( (autor: Autor) => {
    insertPromisesAutores.push(this.autoreService.create(autor));
    })
    const results = await Promise.all(insertPromisesAutores);
    return true;
  }

  private async insertNewLibros(){
    await this.librosService.deleteAllLibros();
    const insertPromisesLibros = [];
    seedLibros.forEach( (libro: CreateLibroDto) => {
    insertPromisesLibros.push(this.librosService.create(libro));
    })
    const results = await Promise.all(insertPromisesLibros);
    return true;
  }
  
}
