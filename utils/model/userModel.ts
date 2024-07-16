import { Schema, Document, models, model, Types } from "mongoose";

interface iUser {
  name: string;
  email: string;
  clerkID: string;
  avatar: string;
  post: {}[];
}

interface iUserData extends iUser, Document {}

const userSchema = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    clerkID: {
      type: String,
    },
    avatar: {
      type: String,
    },
    post: [
      {
        type: Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
);

const userModel = models.users || model<iUserData>("users", userSchema);

export default userModel;
