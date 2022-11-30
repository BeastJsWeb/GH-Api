import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class createFavouritesDto {
  @ApiProperty({example: 123456, description: 'id repos from gitHub'})
  readonly id: number;

  @ApiProperty({example: 'github/git', description: 'repos name'})
  readonly name: string;

  @ApiProperty({example: 'https://avatars.githubusercontent.com/', description: 'user url avatar'})
  readonly avatar: string;

  @ApiProperty({example: 'https://github.com/', description: 'repo url'})
  readonly url: string;
}