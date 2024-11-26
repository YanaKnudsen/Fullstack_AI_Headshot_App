import { Injectable } from '@nestjs/common';
import { Signupdto} from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {PrismaService} from "../db/prisma.service";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  //create() {
 //   return 'This action adds a new auth';
 // }



  constructor(private prisma: PrismaService) {

  }

  async signup(newUser:Signupdto) {
    const randomUUID= crypto.randomUUID();
    const salt= await bcrypt.genSalt(10);
    const hashed_api_key=await bcrypt.hash(randomUUID,salt);
    const password= await bcrypt.hash(newUser.password,salt)


    //generate api key
    return this.prisma.user.create({
      data: {...newUser,password:password, api_key: hashed_api_key},
      select: {
        id: true,
        email: true,
        api_key: true,
        createdAt: true,
        updatedAt: true
      },
    })
  }

  async getAccessToken() {

  }
}
