import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  username: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  lastname?: string;
  
  @ApiProperty()
  email?: number;

  @ApiProperty()
  birthday?: number;
  
  @ApiProperty()
  avatar?: string;
}