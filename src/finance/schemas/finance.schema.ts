import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// import { Document } from 'mongoose';
// export type financeDocument = Finance & Document;

@Schema()
export class Finance {
  @Prop()
  amount: number;

  @Prop()
  category: string;

  @Prop()
  client: string;

  @Prop()
  date: string;
}

export const financeSchema = SchemaFactory.createForClass(Finance);
