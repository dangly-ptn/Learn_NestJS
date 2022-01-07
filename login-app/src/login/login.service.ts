import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';
import { ILogin } from './interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Login')
    private loginModel: Model<ILogin>
  ) { }

  async signUp(loginDto: LoginDto): Promise<LoginDto> {
    const { email, password } = loginDto
    if (await this.loginModel.findOne({ email })) {
      throw new ConflictException('User already exists')
    } else {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(password, salt)
      return new this.loginModel(
        {
          email,
          password: hashedPassword
        }
      ).save()
    }
  }

  async signIn(): Promise<any> {
    return 'This is sign in function'
  }
}
