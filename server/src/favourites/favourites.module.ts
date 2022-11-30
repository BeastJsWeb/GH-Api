import { Module } from "@nestjs/common"
import { MongooseModule } from '@nestjs/mongoose'
import { FavouritesController } from "./favourites.controller"
import { FavouritesService } from "./favourites.service"
import { Favourites, FavouritesSchema } from "./schemas/favourites.schema"

@Module({
  imports: [MongooseModule.forFeature([{ 
    name: Favourites.name, 
    schema: FavouritesSchema 
  }])],
  providers: [FavouritesService],
  controllers: [FavouritesController]
})
export class FavouritesModule {
}