import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {PrismaModule} from "../db/prisma.module";
import {UsersModule} from "../users/users.module";
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    PrismaModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.jwtsecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}


