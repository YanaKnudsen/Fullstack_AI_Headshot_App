import { Injectable,OnModuleInit } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

//onModuleInit fires once Nest has instantiated a module and resolved its dependencies but before it is fully operational.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }
}
