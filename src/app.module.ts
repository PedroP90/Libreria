import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './modulos/seed/seed.module';
import { AutoresModule } from './modulos/autores/autores.module';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { LibrosModule } from './modulos/libros/libros.module';

@Module({
  imports: [ConfigModule.forRoot(),
    SeedModule,
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      // database: process.env.DB_NAME,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // autoLoadEntities: true,
      // synchronize: true
      type: 'postgres',
      host: "192.168.1.24",
      port: 5432,
      database: "postgres",
      username: "postgres",
      password: "pedro",
      autoLoadEntities: true,
      synchronize: true
    }),
    AutoresModule,
    ClientesModule,
    LibrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
