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
      // host: 'mysql.gb.stackcp.com',
      host: 'monorail.proxy.rlwy.net',
      // host: 'localhost',
      // port: 58522,
      port: 41595,
      // port: 3306,
      // username: 'portfolio-35303035ab9c',
      username: 'root',
      // password: '[Yakys<3]&g_portfolio;',
      password: 'pbZVptGgllpVpaXBqCQZBeIYpMnPhUwQ',
      // database: 'portfolio-35303035ab9c',
      database: 'railway',
      // database: 'portfolio',
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
