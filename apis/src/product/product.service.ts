import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly product: Model<Product>,
  ) { }

  async create(data: ProductDto): Promise<Product> {
    const createdCat = await new this.product(data);

    return await createdCat.save();
  }
  async findAll(): Promise<Product[]> {
    return await this.product.find().exec();
  }
  async findById(id: string): Promise<Product> {
    const res = await this.product.findById(id);
    if (!res) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
    return res;
  }
  async update(id: string, data: Product): Promise<Product> {
    const res = await this.product.findByIdAndUpdate({ _id: id }, data).exec();
    if (!res) throw new NotFoundException(`Product #${id} not found`);
    return data
  }
  async removeById(id: string): Promise<any> {
    const res = await this.product.findByIdAndRemove(id);
    if (!res) throw new BadRequestException();
    
    return {id};
  }
}
