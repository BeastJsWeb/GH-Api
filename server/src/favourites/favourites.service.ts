import { Injectable } from "@nestjs/common"
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { createFavouritesDto } from "./dto/createFavourites.dto"
import { updateFavouritesDto } from "./dto/updateFavourites.dto"
import { Favourites, FavouritesDocument } from "./schemas/favourites.schema"

@Injectable()
export class FavouritesService {
  constructor(@InjectModel(Favourites.name) private FavModel: Model<FavouritesDocument>) {}

  async getAll(): Promise<Favourites[]> {
    return this.FavModel.find().exec()
  }

  async removeAll(): Promise<Favourites[]> {
    return this.FavModel.remove({})
  }

  async create(favouritesDto: createFavouritesDto): Promise<Favourites> {
    const created = new this.FavModel(favouritesDto)
    return created.save()
  }

  async remove(id: number): Promise<Favourites> {
    return this.FavModel.findOneAndDelete({id})
  }

  async getById(id: number): Promise<Favourites> {
    return this.FavModel.findById(id)
  }

  async update(id: number, favouritesDto: updateFavouritesDto): Promise<Favourites> {
    return this.FavModel.findOneAndUpdate({id}, favouritesDto, {new: true})
  }
}