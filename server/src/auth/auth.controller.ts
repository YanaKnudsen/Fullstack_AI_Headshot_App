import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
//import { UpdateAuthDto } from './dto/update-auth.dto';
import {Signupdto} from "./dto/create-auth.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  async signup(@Body() newUser: Signupdto) {
    console.log("Body:", newUser)
    return this.authService.signup(newUser);
  }


}
