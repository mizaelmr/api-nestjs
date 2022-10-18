import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliableDto } from './create-avaliable.dto';

export class UpdateAvaliableDto extends PartialType(CreateAvaliableDto) {}
