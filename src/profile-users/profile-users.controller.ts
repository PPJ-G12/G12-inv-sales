import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileUsersService } from './profile-users.service';
import { CreateProfileUserDto } from './dto/create-profile-user.dto';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';

@Controller('users')
export class ProfileUsersController {
  constructor(private readonly usersService: ProfileUsersService) {}

  @Post()
  create(@Body() createUserDto: CreateProfileUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateProfileUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
