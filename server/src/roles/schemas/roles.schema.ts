import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger/dist'

export type UserDocument = HydratedDocument<Roles>

@Schema()
export class Roles {
  @ApiProperty({example: 'ADMIN', description: 'user role value'})
  @Prop()
  value: string

  @ApiProperty({example: 'administrator', description: 'role description'})
  @Prop()
  description: string
}

export const RolesSchema = SchemaFactory.createForClass(Roles)