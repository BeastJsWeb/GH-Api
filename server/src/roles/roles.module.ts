import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Roles, RolesSchema } from './schemas/roles.schema';

@Module({
  imports: [MongooseModule.forFeature([{ 
    name: Roles.name, 
    schema: RolesSchema
  }])],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
