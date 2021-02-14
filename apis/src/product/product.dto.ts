import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  title: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Description' })
  description: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Photos url' })
  photos: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Rent price' })
  price: number;
}