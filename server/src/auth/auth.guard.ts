import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {boolean} from "yup";
import {Observable} from "rxjs";
import {validate} from "class-validator";


@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request =context.switchToHttp().getRequest<Request>();
//checking accessToken
        const apiKeyHeader=request.headers['api-key']
        if(!apiKeyHeader){
            return false;
        }
        const foundUser=await this.prisma.user.findFirst({where:{api_key:apiKeyHeader}})
        if (!foundUser||foundUser.api_key!==apiKeyHeader){
            return false;
        }
        return true;
    }
}