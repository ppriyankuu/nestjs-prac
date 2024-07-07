import { randomBytes } from 'crypto';
import { prisma } from 'src/db';
import { User } from 'src/types';

export class UserServices {
  public async addUser({ username, password }: Partial<User>): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    return newUser;
  }

  public async checkUser({
    username,
    password,
  }: Partial<User>): Promise<boolean> {
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (!existingUser) return false;

    const correctPassword = existingUser.password === password;

    if (!correctPassword) return false;

    return true;
  }

  public generateToken(): string {
    return randomBytes(32).toString('hex');
  }
}
