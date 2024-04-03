import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async happyBirthdaySuin(birthdayCode: string) {
    if (birthdayCode === '020403') {
      return {
        statusCode: HttpStatus.ACCEPTED,
        data: {
          message: '긴 말 안 한다. 수인찌 생일축하해잉!',
        },
      };
    } else {
      throw new BadRequestException('지 생일도 모르노 (6글자예용 헤헷!');
    }
  }
}
