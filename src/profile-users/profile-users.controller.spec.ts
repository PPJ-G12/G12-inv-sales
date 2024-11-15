import { Test, TestingModule } from '@nestjs/testing';
import { ProfileUsersController } from './profile-users.controller';
import { ProfileUsersService } from './profile-users.service';

describe('ProfileUsersController', () => {
  let controller: ProfileUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileUsersController],
      providers: [ProfileUsersService],
    }).compile();

    controller = module.get<ProfileUsersController>(ProfileUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
