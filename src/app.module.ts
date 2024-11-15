import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileUsersModule } from './profile-users/profile-users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de configuración estén disponibles globalmente
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pirribarra',
        password: 'Malik.412515',
        database: 'user-db',
        entities: [],
        autoLoadEntities: true, // Carga automáticamente las entidades
        synchronize: true, // ¡Solo para desarrollo!
      }),
    }),
    ProfileUsersModule,
  ],
  controllers: [AppController],

})
export class AppModule {}
