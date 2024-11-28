import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {PrismaModule} from "../db/prisma.module";
//add to exports so it is visible outside of the module
@Module({
  imports:[PrismaModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
