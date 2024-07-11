import { Controller, Get, Post, Req, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { VisitasService } from './visitas.service';
import { Visita } from './visita.model';
import { UserAgentService } from './user_agent.service';
import * as dns from 'dns';

@Controller('visitas')
export class VisitasController {
    constructor(
        private readonly visitasService: VisitasService,
        private readonly userAgentService: UserAgentService
    ) { }


    @Get()
    async findAll(): Promise<Visita[]> {
        return this.visitasService.findAll();
    }

    @Post()
    async create(@Req() request: Request): Promise<any> {
        const visita = new Visita();

        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress;
        visita.ip = Array.isArray(ip) ? ip[0] : ip;

        const userAgent = request.headers['user-agent'] || 'Browser unknown';
        visita.browser = userAgent

        let hostname = 'Hostname unknown';
        if (typeof ip === 'string') {
            hostname = await new Promise<string>((resolve, reject) => {
                dns.reverse(ip, (err, hostnames) => {
                    if (err) {
                        resolve('Unknown hostname: ' + hostnames);
                    } else {
                        resolve(hostnames[0] || 'Unknown hostname');
                    }
                });
            });
        }

        visita.hostname = hostname;
        visita.device = this.userAgentService.getDeviceInfo(userAgent);

        visita.timestamp = new Date();

        return await this.visitasService.create(visita);
    }
}
