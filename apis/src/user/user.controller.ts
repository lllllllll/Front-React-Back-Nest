import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private logger(method: string, data: any) {
    const clog =  new Logger('user');
    clog.log(`${method} = ${JSON.stringify(data)}`);
  }
  
  constructor(private service: UserService) {}

  @Get()
  async getProducts(): Promise<User[]> {
    const data = await this.service.findAll();
    this.logger('Get', data);

    return data;
  }
  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User> {
    const data = await this.service.findById(id);
    this.logger('Get Id', data);

    return data;
  }

  @Post()
  async createProduct(@Body() body: UserDto): Promise<User> {
    const data = await this.service.create(body);
    this.logger('Post ', body);

    return data;
  }

  @Patch('/:id')
  async updateProduct(@Body() body: User, @Param('id') id: string): Promise<User> {
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
