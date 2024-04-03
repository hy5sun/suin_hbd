import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':birthdayCode')
  getHello(@Param('birthdayCode') birthdayCode: string) {
    return this.appService.happyBirthdaySuin(birthdayCode);
  }
}
