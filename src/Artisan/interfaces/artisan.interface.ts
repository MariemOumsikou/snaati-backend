import { Document } from 'mongoose';

export interface Artisan extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly phoneNumber: string;
  readonly activityDescription: string;
}