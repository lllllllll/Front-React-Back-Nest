import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Expire' })
  expire: string;

  @IsNotEmpty({ message: 'กรุณาระบุ Description' })
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Photos url' })
  photos: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Rent price' })
  price: number;
}