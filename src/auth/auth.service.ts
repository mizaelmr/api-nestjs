import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password) {
      const result = await compare(password, user.password);
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
