import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileUsersModule } from './profile-users/profile-users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pirribarra',
      password: 'Malik.412515',
      database: 'user-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProfileUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
