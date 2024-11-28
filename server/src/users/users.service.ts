import { Injectable } from '@nestjs/common';
import {PrismaService} from "../db/prisma.service";

//create dto class user
export type User=any;


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {

    }
    //find user according to the email
//check in prisma  what is findFirst
    async findOne(email: string): Promise<User | undefined> {
        return this.prisma.user.findFirst({
            where: {email: email},
        });
    }
}
