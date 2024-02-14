import mongoose from 'mongoose';
import { CustomError } from '../domain';
import { color } from '@adapters/color/color-adapter';

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDB {
  public static async connect({ dbName, mongoUrl }: Options) {
    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });

      console.log(color.success('Connected to MongoDB'));
    } catch (error) {
      throw CustomError.internal('Error connecting to MongoDB');
    }
  }
}
