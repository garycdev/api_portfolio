import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Visita } from './visita.model';
import { VisitasService } from './visitas.service';
import { VisitasController } from './visitas.controller';

@Module({
    imports: [SequelizeModule.forFeature([Visita])],
    providers: [VisitasService],
    controllers: [VisitasController],
})
export class VisitasModule { }
