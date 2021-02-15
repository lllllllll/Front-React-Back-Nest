import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserDto } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly user: Model<User>,
  ) { }

  async create(data: UserDto): Promise<User> {
    if (data.password) data.password = await bcrypt.hash(data.password, 10);
    const createdCat = await new this.user(data);

    return await createdCat.save();
  }
  async findAll(): Promise<User[]> {
    return await this.user.find().exec();
  }
  async findById(id: string): Promise<User> {
    const res = await this.user.findById(id);
    if (!res) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
    return res;
  }
  async login(data: UserDto): Promise<any> {
    const res = await this.user.findOne({username: data.username});
    if (!res) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
    const check = await bcrypt.compare(data.password, res.password);
    if (check) {
      const { username, name, email, _id } = res;
      const token = await jwt.sign(
        {
          _id,
          username,
        },
        process.env.SECRET,
        { expiresIn: '7d' },
      );
      return { username, name, email, token };
    } else {
      throw new BadRequestException();
    }
  }
  async update(id: string, data: User): Promise<User> {
    const res = await this.user.findByIdAndUpdate({ _id: id }, data).exec();
    if (!res) throw new NotFoundException(`User #${id} not found`);
    return data
  }
  async removeById(id: string): Promise<string> {
    const res = await this.user.findByIdAndRemove(id);
    if (!res) throw new BadRequestException();
    
    return id;
  }
}
