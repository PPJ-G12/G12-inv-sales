import { Injectable } from '@nestjs/common';
import { CreateProfileUserDto } from './dto/create-profile-user.dto';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';

@Injectable()
export class ProfileUsersService {
  create(createProfileUserDto: CreateProfileUserDto) {
    return 'This action adds a new profileUser';
  }

  findAll() {
    return `This action returns all profileUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profileUser`;
  }

  update(id: number, updateProfileUserDto: UpdateProfileUserDto) {
    return `This action updates a #${id} profileUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} profileUser`;
  }
}
