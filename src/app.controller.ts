import { Body, Controller, Get } from '@nestjs/common';

@Controller('greet')
export class GreetController {
  @Get()
  greetUser(
    @Body()
    message: {
      username: string;
      greetings: string;
    },
  ) {
    return { greetings: `${message.greetings} ${message.username}` };
  }
}
