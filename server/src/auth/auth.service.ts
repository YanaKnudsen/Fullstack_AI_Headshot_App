import {Injectable, UnauthorizedException} from '@nestjs/common';
import { Signupdto} from './dto/create-auth.dto';
import {PrismaService} from "../db/prisma.service";
import * as bcrypt from 'bcrypt';
import {Logindto} from "./dto/login.dto";


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
    const password= await bcrypt.hash(newUser.password,salt)


    //generate api key
    return this.prisma.user.create({
      data: {...newUser,password:password, api_key: randomUUID},
      select: {
        id: true,
        email: true,
        api_key: true,
        createdAt: true,
        updatedAt: true
      },
    })
  }

  async login(loginedUser:Logindto):Promise<{api_key:string}>{
    const foundUser= await this.prisma.user.findFirst({
      where: {email: loginedUser.email},
    });
    if(foundUser){
      const passOk = await bcrypt.compare(loginedUser.password, foundUser.password);
      if (passOk) {
        return {api_key:foundUser.api_key};
      } else {
        throw new UnauthorizedException("You do not have access");
      }
    }
    else{
      throw new UnauthorizedException("Please check your email");
    }



  }
}
