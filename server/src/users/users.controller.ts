import { Controller, Post, Body, Get } from '@nestjs/common'
import { ApiOperation , ApiResponse, ApiTags} from '@nestjs/swagger'
import { UsersService } from './users.service'
import { User } from './schemas/user.schema'
import { createUserDto } from './dto/createUser.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @ApiOperation({summary: 'create new User'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: createUserDto): Promise<User> {
    return this.UserService.createUser(userDto)
  }

  @ApiOperation({summary: 'log in'})
  @ApiResponse({status: 200, type: User})
  @Get()
  login(user):  Promise<User> {
    return user
  }
}
