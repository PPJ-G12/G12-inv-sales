import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileUsersService } from './profile-users.service';
import { CreateProfileUserDto } from './dto/create-profile-user.dto';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';

@Controller('profile-users')
export class ProfileUsersController {
  constructor(private readonly profileUsersService: ProfileUsersService) {}

  @Post()
  create(@Body() createProfileUserDto: CreateProfileUserDto) {
    return this.profileUsersService.create(createProfileUserDto);
  }

  @Get()
  findAll() {
    return this.profileUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileUserDto: UpdateProfileUserDto) {
    return this.profileUsersService.update(+id, updateProfileUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileUsersService.remove(+id);
  }
}
