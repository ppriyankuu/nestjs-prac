import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';
import { UserServices } from './services/users.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices],
})
export class UsersModule {}
