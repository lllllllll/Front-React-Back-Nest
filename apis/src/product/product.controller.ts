import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from './product.dto';

import { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    console.log('Product >> Get ');

    return await this.service.findAll();
  }

  @Post()
  async createProduct(@Body() body: ProductDto): Promise<Product> {
    console.log('Product >> Create >> ', body);

    return await this.service.create(body);
  }
}
