import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly product: Model<User>,
  ) { }

  async create(data: UserDto): Promise<User> {
    const createdCat = await new this.product(data);

    return await createdCat.save();
  }
  async findAll(): Promise<User[]> {
    return await this.product.find().exec();
  }
  async findById(id: string): Promise<User> {
    const res = await this.product.findById(id);
    if (!res) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
    return res;
  }
  async update(id: string, data: User): Promise<User> {
    const res = await this.product.findByIdAndUpdate({ _id: id }, data).exec();
    if (!res) throw new NotFoundException(`Product #${id} not found`);
    return data
  }
  async removeById(id: string): Promise<string> {
    const res = await this.product.findByIdAndRemove(id);
    if (!res) throw new BadRequestException();
    
    return id;
  }
}
