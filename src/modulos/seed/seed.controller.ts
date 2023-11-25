import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Console } from 'console';



@Controller('seed')
export class SeedController {
  
    constructor (private readonly seedService: SeedService){

    }  
    @Get()
    loadData(){
      //console.log(this.seedService.loadData);
      return this.seedService.loadData();
    }

}
