import { Module } from '@nestjs/common';
import { ProfileUsersService } from './profile-users.service';
import { ProfileUsersController } from './profile-users.controller';

@Module({
  controllers: [ProfileUsersController],
  providers: [ProfileUsersService],
})
export class ProfileUsersModule {}
