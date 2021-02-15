import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.gaurd';
import { ProductDto } from './product.dto';

import { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller('product')
@UseGuards(new AuthGuard())
export class ProductController {
  private logger(method: string, data: any) {
    const clog =  new Logger('Product');
    clog.log(`${method} = ${JSON.stringify(data)}`);
  }
  
  constructor(private service: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const data = await this.service.findAll();
    this.logger('Get', data);

    return data;
  }
  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Product> {
    const data = await this.service.findById(id);
    this.logger('Get Id', data);

    return data;
  }

  @Post()
  async createProduct(@Body() body: ProductDto): Promise<Product> {
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
