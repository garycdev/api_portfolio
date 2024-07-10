import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Visita } from './visita.model';

@Injectable()
export class VisitasService {
    constructor(
        @InjectModel(Visita)
        private readonly visitaModel: typeof Visita,
    ) { }

    async findAll(): Promise<Visita[]> {
        return this.visitaModel.findAll();
    }

    async create(visita: Visita): Promise<Visita> {
        return Visita.create(visita.dataValues)
    }
}
