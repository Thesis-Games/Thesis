import mongoose, { Document, Schema, Model } from "mongoose";
import { users } from "../types/user-type";
interface UserDocument extends users, Document {}

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export const sessionModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "user",
  userSchema
);
