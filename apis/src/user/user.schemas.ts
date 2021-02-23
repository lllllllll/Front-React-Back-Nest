import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
    lastname: String,
    email: String,
    birthday: String,
    avatar: String,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);