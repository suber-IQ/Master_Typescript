import mongoose from 'mongoose';

export const connectDatabase = async (DATABASE_URL: string) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Database Connected Successfully..');
  } catch (error) {
    console.log('Error connecting to database', error);
    return process.exit(1);
  }
}

mongoose.connection.on('disconnected',connectDatabase);

