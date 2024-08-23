import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; author: string } {
    return { message: 'ToDo API main end-point', author: 'Sampriti Mukherjee' };
  }
}