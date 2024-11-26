import {IsEmail, IsString, Matches, MinLength} from "class-validator";

export class Logindto {
    //add validation to email
    @IsEmail()
    @IsString()
    email:string;
    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,{message:"Please choose s stronger password."})
    password:string;

}