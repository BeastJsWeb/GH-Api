import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class createUserDto {
  @ApiProperty({example: 'myName', description: 'user name'})
  readonly username: string;

  @ApiProperty({example: 'user1', description: 'user password'})
  readonly password: string;
}