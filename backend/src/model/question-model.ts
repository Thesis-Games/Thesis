import mongoose, { Document, Schema, Model } from "mongoose";
import { question } from "../types/question-type";
interface questionDocument extends question, Document {}

const questionSchema: Schema = new Schema(
  {
    level: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export const questionModel: Model<questionDocument> =
  mongoose.model<questionDocument>("question", questionSchema);
