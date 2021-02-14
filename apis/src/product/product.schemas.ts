import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    photos: String,
    price: Number,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);