import {Body, Controller, Param} from '@nestjs/common';
import {ProfileUsersService} from './profile-users.service';
import {CreateProfileUserDto} from './dto/create-profile-user.dto';
import {UpdateProfileUserDto} from './dto/update-profile-user.dto';
import {MessagePattern} from '@nestjs/microservices';

@Controller()
export class ProfileUsersController {
  constructor(private readonly usersService: ProfileUsersService) {}

  @MessagePattern("createUser")
  create(@Body() createUserDto: CreateProfileUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern("findAllUsers")
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern("findUserById")
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @MessagePattern("updateUser")
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateProfileUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @MessagePattern("deleteUser")
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
