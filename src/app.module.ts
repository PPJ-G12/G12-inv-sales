import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileUsersModule } from './profile-users/profile-users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'users-db',
      port: 5434,
      username: 'postgres',
      password: '123456',
      database: 'usersdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProfileUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
