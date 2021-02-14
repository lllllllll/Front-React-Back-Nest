import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';

import { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  private logger(method: string, data: any) {
    const clog =  new Logger('Product');
    clog.log(`${method} = ${JSON.stringify(data)}`);
  }
  
  constructor(private service: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const data = await this.service.findAll();
    this.logger('Get', data)

    return data;
  }

  @Post()
  async createProduct(@Body() body: Product): Promise<Product> {
    const data = await this.service.create(body);
    this.logger('Post ', body);

    return data;
  }

  @Patch('/:id')
  async updateProduct(@Body() body: Product, @Param('id') id: string): Promise<Product> {
    const data = await this.service.update(id, body);
    this.logger(`Patch id ${id} `, data);

    return data;
  }

  @Delete('/:id')
  async delProduct(@Param('id') id: string): Promise<string> {
    const data = await this.service.removeById(id);
    this.logger(`Delete id ${id} `, data);

    return data;
  }
}
