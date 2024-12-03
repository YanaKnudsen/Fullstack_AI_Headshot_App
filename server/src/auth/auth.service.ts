import {Injectable, UnauthorizedException,ConflictException,InternalServerErrorException} from '@nestjs/common';
import {Signupdto} from './dto/create-auth.dto';
import {PrismaService} from "../db/prisma.service";
import * as bcrypt from 'bcrypt';
import {Logindto} from "./dto/login.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private usersService: UsersService, private jwtService: JwtService) {

    }

    async signup(newUser: Signupdto) {
        //obtain user newUser
        //hash password
            const saltRounds = await bcrypt.genSalt(10);
            const hashed_password = bcrypt.hashSync(newUser.password, saltRounds);
        try {
            const createdUser = await this.prisma.user.create({
                data: {...newUser, password: hashed_password},
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true

                },
            })
        } catch (error) {
            console.log(error.code)  ;
            if (error.code === "P2002"){
               throw new ConflictException("User with the same email already exists");
            }
            throw new InternalServerErrorException('An unexpected error occurred');

        }

}




    async login(loginedUser:Logindto) {
      /*  const foundUser = await this.prisma.user.findFirst({
            where: {email: loginedUser.email},
        });
        if (foundUser) {
            const passOk = await bcrypt.compare(loginedUser.password, foundUser.password);
        if (passOk) {
            return true;
        } else {
            throw new UnauthorizedException("You do not have access");
        }
    } else {
        throw new UnauthorizedException("Please check your email");
    }

//login successfull
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    //  };
*/
}
}
