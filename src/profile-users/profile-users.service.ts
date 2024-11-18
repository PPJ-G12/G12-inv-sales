import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUser } from './entities/profile-user.entity';
import { CreateProfileUserDto } from './dto/create-profile-user.dto';
import { UpdateProfileUserDto } from './dto/update-profile-user.dto';

@Injectable()
export class ProfileUsersService {
  constructor(
    @InjectRepository(ProfileUser)
    private readonly userRepository: Repository<ProfileUser>,
  ) {}

  async create(createUserDto: CreateProfileUserDto): Promise<ProfileUser> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<ProfileUser[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<ProfileUser> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateProfileUserDto,
  ): Promise<ProfileUser> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
