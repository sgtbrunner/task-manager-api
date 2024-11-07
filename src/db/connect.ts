import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async (url: string, options?: ConnectOptions) =>
  mongoose.connect(url, options);
