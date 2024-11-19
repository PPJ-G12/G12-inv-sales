import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileUsersService } from './profile-users.service';
import { ProfileUsersController } from './profile-users.controller';
import { ProfileUser } from './entities/profile-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileUser])],
  controllers: [ProfileUsersController],
  providers: [ProfileUsersService],
})
export class ProfileUsersModule {}
