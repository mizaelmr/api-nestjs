import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'o campo NOME não pode ser vazio.' })
  name: string;
  @IsNotEmpty({ message: 'o campo email não pode ser vazio.' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'o campo senha não pode ser vazio.' })
  password: string;
  @IsNotEmpty({ message: 'o campo aniversário não pode ser vazio.' })
  birth: string;
  active: boolean;
  phones?: Array<string>;
  @IsNotEmpty({ message: 'o campo sexo não pode ser vazio.' })
  sex: string;
}
