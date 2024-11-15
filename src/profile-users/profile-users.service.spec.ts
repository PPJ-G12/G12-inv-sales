import { Test, TestingModule } from '@nestjs/testing';
import { ProfileUsersService } from './profile-users.service';

describe('ProfileUsersService', () => {
  let service: ProfileUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileUsersService],
    }).compile();

    service = module.get<ProfileUsersService>(ProfileUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
