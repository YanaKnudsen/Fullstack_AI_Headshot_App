import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {PrismaModule} from "../db/prisma.module";
import {PrismaService} from "../db/prisma.service";

@Module({
  imports:[PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
