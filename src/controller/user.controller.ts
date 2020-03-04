import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/entity/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users')
  async root() : Promise<User[]>  {
    return await this.userService.findAll();
  }

  

}