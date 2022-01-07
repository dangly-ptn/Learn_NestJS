import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { ILogin } from 'src/interfaces/login.interface';
import { Model } from 'mongoose'
import { LoginDto } from 'src/dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Login')
    private loginModel: Model<ILogin>
  ) { }

  async createUser(loginDto: LoginDto): Promise<LoginDto> {
    if (await this.loginModel.findOne({ email: loginDto.email })) {
      throw new ConflictException('User already exists')
    } else {
      return new this.loginModel(loginDto).save()
    }
  }
}
