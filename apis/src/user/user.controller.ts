import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private logger(method: string, data: any) {
    const clog =  new Logger('Users');
    clog.log(`${method} = ${JSON.stringify(data)}`);
  }
  
  constructor(private service: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
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
  async create(@Body() body: UserDto): Promise<User> {
    const data = await this.service.create(body);
    this.logger('Create ', body);

    return data;
  }

  @Post()
  async login(@Body() body: UserDto): Promise<any> {
    const data = await this.service.login(body);
    this.logger('Login ', body);

    return data;
  }

  @Patch('/:id')
  async update(@Body() body: User, @Param('id') id: string): Promise<User> {
    const data = await this.service.update(id, body);
    this.logger(`Update id ${id} `, data);

    return data;
  }

  @Delete('/:id')
  async del(@Param('id') id: string): Promise<string> {
    const data = await this.service.removeById(id);
    this.logger(`Remove id ${id} `, data);

    return data;
  }
}
