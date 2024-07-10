import { Controller, Get, Post, Req, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { VisitasService } from './visitas.service';
import { Visita } from './visita.model';

@Controller('visitas')
export class VisitasController {
    constructor(private readonly visitasService: VisitasService) { }

    @Get()
    async findAll(): Promise<Visita[]> {
        return this.visitasService.findAll();
    }

    @Post()
    async create(@Req() request: Request): Promise<any> {
        const visita = new Visita();

        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress;
        visita.ip = Array.isArray(ip) ? ip[0] : ip;

        visita.browser = request.headers['user-agent'] || '';

        if (!visita.ip || !visita.browser) {
            throw new HttpException('No se pudo capturar la IP o el navegador del cliente', HttpStatus.BAD_REQUEST);
        }

        visita.timestamp = new Date(); // Asignar el timestamp por defecto

        return await this.visitasService.create(visita);
    }
}
