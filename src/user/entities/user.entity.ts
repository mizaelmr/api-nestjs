import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, required: true },
});

export interface IUser {
  name: string;
  email: string;
  age: string;
  password: string;
  active: boolean;
}

// export class User {}
