import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<CreateUserDto>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const email = await this.userModel
        .findOne({ email: createUserDto.email })
        .exec();

      if (email) {
        throw new HttpException('Email já existe', 401);
      }

      const pass = await hash(createUserDto.password, 10);
      const result = await new this.userModel({
        ...createUserDto,
        password: pass,
      }).save();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const result = await this.userModel.find().exec();
      return result;
    } catch (error) {
      return error.message;
    }
    return `This action returns all user`;
  }

  async findByEmail(email: string) {
    try {
      const thisEmail = await this.userModel.findOne({ email }).exec();
      return thisEmail;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: string | number) {
    try {
      const thisEmail = await this.userModel.findOne({ _id: id }).exec();
      return thisEmail;
    } catch (error) {
      return error.message;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    try {
      if (!id) {
        throw new HttpException('Email já existe', 401);
      }
      await this.userModel.findOneAndRemove({ _id: id });

      const data = { message: 'Deletado com sucesso!' };

      return data;
    } catch (error) {
      return error.message;
    }
  }
}
