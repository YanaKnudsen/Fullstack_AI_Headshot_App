import { Controller, Get, Post, Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
import {Signupdto} from "./dto/create-auth.dto";
import {Logindto} from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  async signup(@Body() newUser: Signupdto) {
    console.log(newUser);
    return this.authService.signup(newUser);
  }
  /*@Post("/login")
  async login(@Body() loginedUser: Logindto) {
    console.log("Body:", loginedUser)
    return this.authService.login(loginedUser);
  }*/


}
