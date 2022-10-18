import * as mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
  date: { type: String, required: false },
  start: { type: String, required: false },
  end: { type: Number, required: false },
  description: { type: String, required: false },
  client: { type: String, required: false },
});

export interface IUser {
  title: string;
  url?: string;
  date?: string;
  start?: string;
  end?: string;
  description?: string;
  client?: string;
}

// export class User {}
