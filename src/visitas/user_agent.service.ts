import { Injectable } from '@nestjs/common';
import * as UAParser from 'ua-parser-js';

@Injectable()
export class UserAgentService {
    private parser = new UAParser();

    getDeviceInfo(userAgent: string) {
        return this.parser.setUA(userAgent).getResult();
    }
}
