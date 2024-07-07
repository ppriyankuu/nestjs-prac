import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserServices } from '../services/users.service';
import { Response } from 'express';

@Controller('auth')
export class UserController {
  constructor(private readonly services: UserServices) {}

  @Post('sign-up')
  public async signupUser(
    @Body() user: { username: string; password: string },
    @Res() res: Response,
  ) {
    const registerdUser = await this.services.addUser(user);

    const token = this.services.generateToken();

    res.cookie('auth_token', token);

    return res.status(200).json({
      user: registerdUser,
    });
  }

  @Post('sign-in')
  public async signinUser(
    @Body() user: { username: string; password: string },
    @Res() res: Response,
  ) {
    const authentication = await this.services.checkUser(user);
    if (!authentication)
      return res.json(404).json({ message: 'invalid credentials' });
    const token = this.services.generateToken();

    res.cookie('auth_token', token);
    res.status(200).json({ message: 'signin successfull' });
  }
}
