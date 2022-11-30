import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schema';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async createUser(userDto: createUserDto): Promise<User> {
    const createdUser = new this.UserModel(userDto)
    return createdUser.save()
  }

  async login(user):  Promise<User> {
    return user
  }
}
