import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger/dist'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @ApiProperty({example: 'myName', description: 'user name'})
  @Prop()
  username: string

  @ApiProperty({example: 'user1', description: 'user password'})
  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)