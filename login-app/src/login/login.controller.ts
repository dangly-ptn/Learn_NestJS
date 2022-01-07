import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) { }

  @Post('/signup')
  async signUp(@Body() loginDto: LoginDto): Promise<LoginDto> {
    return this.loginService.signUp(loginDto)
  }

  @Post('/signin')
  async signIn(): Promise<any> {
    return this.loginService.signIn()
  }
}
