import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) { }

  @Post()
  async createUser(@Body() loginDto: LoginDto): Promise<LoginDto> {
    return this.loginService.createUser(loginDto)
  }
}
