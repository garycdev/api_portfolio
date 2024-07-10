import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Visita } from './visitas/visita.model';
import { VisitasModule } from './visitas/visitas.module';
// import { VisitasController } from './visitas/visitas.controller'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql.gb.stackcp.com',
      port: 58522,
      username: 'portfolio-35303035ab9c',
      password: '[Yakys<3]&g_portfolio;',
      database: 'portfolio-35303035ab9c',
      models: [Visita],
      autoLoadModels: true,
      synchronize: true,
    }),
    VisitasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
