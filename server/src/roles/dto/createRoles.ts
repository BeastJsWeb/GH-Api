import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class createRoles {
  @ApiProperty({example: 'ADMIN', description: 'user role value'})
  readonly value: string;

  @ApiProperty({example: 'administrator', description: 'role description'})
  readonly description: string;
}