import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export const UserModel = model<IUser>('User',userSchema);