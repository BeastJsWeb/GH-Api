import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger/dist'

export type FavouritesDocument = HydratedDocument<Favourites>

@Schema()
export class Favourites {
  @ApiProperty({example: 123456, description: 'id repos from gitHub'})
  @Prop()
  id: number

  @ApiProperty({example: 'github/git', description: 'repos name'})
  @Prop()
  name: string

  @ApiProperty({example: 'https://avatars.githubusercontent.com/', description: 'user url avatar'})
  @Prop()
  avatar: string

  @ApiProperty({example: 'https://github.com/', description: 'repo url'})
  @Prop()
  url: string
}

export const FavouritesSchema = SchemaFactory.createForClass(Favourites)