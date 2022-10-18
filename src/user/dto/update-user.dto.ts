import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;
  name: string;
  email: string;
  password: string;
  birth: string;
  active: boolean;
  phones: Array<string>;
  sex: string;
}
