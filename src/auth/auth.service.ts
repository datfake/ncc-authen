import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user,1111111);
    if (user) {
      const { passWord, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: User): Promise< any | { status: number }>{
    return this.validateUser(user.userName,user.passWord).then((userData)=>{
      if(!userData){
        return { status: 404 };
      }
      let payload = `${userData.name}${userData.id}`;
      const accessToken = this.jwtService.sign(payload);

      return {
         expires_in: 3600,
         access_token: accessToken,
         user_id: payload,
         status: 200
      };

    });
}
}
