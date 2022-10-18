import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  birth: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;
  @Prop()
  phones: string;

  @Prop()
  sex: string;
}

export const userSchema = SchemaFactory.createForClass(User);
