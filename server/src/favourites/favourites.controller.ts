import { Controller, Delete, Get, Post, Body, Param, Put } from '@nestjs/common'
import { FavouritesService } from './favourites.service'
import { createFavouritesDto } from './dto/createFavourites.dto'
import { updateFavouritesDto } from './dto/updateFavourites.dto'
import { Favourites } from './schemas/favourites.schema'
import { ApiOperation , ApiResponse, ApiTags} from '@nestjs/swagger'

@ApiTags('favourites')
@Controller('favourites')
export class FavouritesController {
  constructor(private readonly FavService: FavouritesService) {}

  @ApiOperation({summary: 'get all favourites'})
  @ApiResponse({status: 200, type: [Favourites]})
  @Get()
  getAll(): Promise<Favourites[]> {
    return this.FavService.getAll()
  }

  @ApiOperation({summary: 'add to favourites'})
  @ApiResponse({status: 200, type: Favourites})
  @Post()
  create(@Body() dto: createFavouritesDto): Promise<Favourites> {
    return this.FavService.create(dto)
  }

  @ApiOperation({summary: 'remove from favourites'})
  @ApiResponse({status: 200, type: Favourites})
  @Delete(':id')
  remove(@Param('id') id: number): Promise<Favourites> {
    return this.FavService.remove(id)
  }

  @ApiOperation({summary: 'remove all favourites'})
  @ApiResponse({status: 200, type: [Favourites]})
  @Delete()
  removeAll(): Promise<Favourites[]> {
    return this.FavService.removeAll()
  }

  @ApiOperation({summary: 'find one by ID'})
  @ApiResponse({status: 200, type: Favourites})
  @Get(':id')
  getById(@Param('id') id: number): Promise<Favourites> {
    return this.FavService.getById(id)
  }

  @ApiOperation({summary: 'edit favourite'})
  @ApiResponse({status: 200, type: Favourites})
  @Put(':id')
  update(
    @Body() dto: updateFavouritesDto, 
    @Param('id') id: number
  ): Promise<Favourites> {
    return this.FavService.update(id, dto)
  }
}
