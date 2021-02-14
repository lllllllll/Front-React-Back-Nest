import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly product: Model<Product>,
  ) {}

  async create(product: ProductDto): Promise<Product> {
    const createdCat = new this.product(product);

    return await createdCat.save();
  }
  async findAll(): Promise<Product[]> {
    const products = await this.product.find().exec();
    console.log('users >>> ', products);

    return products;
  }
}
