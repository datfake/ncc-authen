import { Module } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UsersService } from './users.service';
import { UserController } from 'src/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService]
})
export class UsersModule {}
