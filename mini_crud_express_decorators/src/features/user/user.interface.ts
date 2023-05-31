import { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;

    // add more properties
}
