import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Visita } from './visitas/visita.model';
import { VisitasModule } from './visitas/visitas.module';
// import { VisitasController } from './visitas/visitas.controller'
import { config } from 'dotenv'
config()

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      // host: 'mysql.gb.stackcp.com',
      // host: 'monorail.proxy.rlwy.net',
      host: process.env.DB_HOST,

      // port: 58522,
      // port: 41595,
      port: parseInt(process.env.DB_PORT),

      // username: 'portfolio-35303035ab9c',
      username: process.env.DB_USER,

      // password: '[Yakys<3]&g_portfolio;',
      // password: 'pbZVptGgllpVpaXBqCQZBeIYpMnPhUwQ',
      password: process.env.DB_PASS,

      // database: 'portfolio-35303035ab9c',
      // database: 'railway',
      database: process.env.DB_NAME,
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
